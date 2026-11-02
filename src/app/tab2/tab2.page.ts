import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router'; 
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonList,
  InfiniteScrollCustomEvent, IonAvatar, IonInfiniteScroll, IonInfiniteScrollContent,
  IonSpinner, IonButton, IonIcon, IonText
} from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NekoService } from '../services/neko.service';
import { NekoItem } from '../models/neko.model';
import { FavoritesService } from '../services/favorites.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [
    CommonModule,
    RouterLink, 
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonList, IonItem, IonLabel, IonAvatar,
    IonInfiniteScroll, IonInfiniteScrollContent,
    IonSpinner, IonButton, IonIcon, IonText
  ],
})
export class Tab2Page implements OnInit {
  private nekoService = inject(NekoService);
  private favoritesService = inject(FavoritesService);

  nekos: NekoItem[] = [];
  perPage = 20;
  loading = false;
  hasMore = true;
  errorMsg: string | null = null;

  ngOnInit() {
    this.loadNekos();
  }

  loadNekos(event?: InfiniteScrollCustomEvent) {
    if (this.loading || !this.hasMore) {
      event?.target.complete();
      return;
    }

    this.loading = true;
    this.errorMsg = null;

    this.nekoService.getByCategory('neko', this.perPage)
      .pipe(
        finalize(() => {
          this.loading = false;
          if (event) {
            event.target.complete();
          }
        })
      )
      .subscribe({
        next: (response) => {
          const nuevos = response.results ?? [];
          const existentes = new Set(this.nekos.map((n) => n.url));
          const filtrados = nuevos.filter((n) => !existentes.has(n.url));
          
          this.nekos = [...this.nekos, ...filtrados];

          if (filtrados.length === 0) {
            this.hasMore = false;
          }
        },
        error: (err) => {
          console.error('[Tab2] Error al cargar nekos:', err);
          this.errorMsg = 'No se pudieron cargar los nekos. Revisa tu conexión.';
        },
      });
  }

  onIonInfinite(event: InfiniteScrollCustomEvent) {
    this.loadNekos(event);
  }

  reintentar() {
    this.errorMsg = null;
    this.hasMore = true;
    this.loadNekos();
  }

  toggleFavorito(neko: NekoItem, event: Event) {
    event.stopPropagation();
    this.favoritesService.toggleFavorite(neko);
  }

  esFavorito(url: string): boolean {
    return this.favoritesService.isFavorite(url);
  }
}