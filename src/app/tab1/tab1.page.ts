import { Component, inject } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar,
  IonList, IonItem, IonLabel, IonAvatar, IonSpinner, IonButton,
  IonIcon, IonText, IonSegment, IonSegmentButton, SearchbarCustomEvent
} from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Subject, debounceTime, distinctUntilChanged, switchMap, of, catchError } from 'rxjs';
import { NekoService } from '../services/neko.service';
import { NekoItem } from '../models/neko.model';

type NekoType = 'neko' | 'husbando' | 'kitsune' | 'waifu';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonSearchbar, IonSegment, IonSegmentButton,
    IonList, IonItem, IonLabel, IonAvatar,
    IonSpinner, IonButton, IonIcon, IonText,
  ],
})
export class Tab1Page {
  private nekoService = inject(NekoService);

  query = '';
  tipo: NekoType = 'neko';
  resultados: NekoItem[] = [];
  loading = false;
  errorMsg: string | null = null;
  busquedaRealizada = false;

  private search$ = new Subject<{ query: string; tipo: NekoType }>();

  constructor() {
    this.search$
      .pipe(
        debounceTime(400),
        distinctUntilChanged(
          (a, b) => a.query === b.query && a.tipo === b.tipo
        ),
        switchMap(({ query, tipo }) => {
          this.loading = true;
          this.errorMsg = null;
          this.busquedaRealizada = true;

          return this.nekoService
            .search(query, tipo, 20, false) 
            .pipe(
              catchError((err) => {
                console.error('[Tab1] Error en búsqueda:', err);
                this.errorMsg =
                  'No se pudo realizar la búsqueda. Revisa tu conexión.';
                return of({ results: [] as NekoItem[] });
              })
            );
        })
      )
      .subscribe((response) => {
        this.resultados = response.results ?? [];
        this.loading = false;
      });
  }

  onSearchChange(event: SearchbarCustomEvent) {
    const value = event.detail.value ?? '';
    this.query = value;

    if (value.trim() === '') {
      this.resultados = [];
      this.busquedaRealizada = false;
      this.errorMsg = null;
      return;
    }

    this.search$.next({ query: value.trim(), tipo: this.tipo });
  }

  onTipoChange(event: any) {
    this.tipo = event.detail.value as NekoType;

    if (this.query.trim() !== '') {
      this.search$.next({ query: this.query.trim(), tipo: this.tipo });
    }
  }

  reintentar() {
    if (this.query.trim() !== '') {
      this.errorMsg = null;
      this.search$.next({ query: this.query.trim(), tipo: this.tipo });
    }
  }
}