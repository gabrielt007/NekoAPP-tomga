import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton,
  IonButton, IonIcon, IonText, IonCard, IonCardHeader,
  IonCardTitle, IonCardSubtitle, IonCardContent, IonImg, ToastController
} from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NekoItem } from '../models/neko.model';
import { FavoritesService } from '../services/favorites.service';

@Component({
  selector: 'app-detail',
  templateUrl: 'detail.page.html',
  styleUrls: ['detail.page.scss'],
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonButtons, IonBackButton, IonButton, IonIcon,
    IonText,
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonImg,
  ],
})
export class DetailPage implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private favoritesService = inject(FavoritesService);
  private toastController = inject(ToastController);

  neko: NekoItem | null = null;
  errorMsg: string | null = null;

  ngOnInit() {
    this.router.events.subscribe(() => {
      const navigation = this.router.getCurrentNavigation();
      const state = navigation?.extras?.state as { neko?: NekoItem } | undefined;
      
      if (state?.neko) {
        this.neko = state.neko;
        this.errorMsg = null;
      }
    });

    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras?.state as { neko?: NekoItem } | undefined;
    
    if (!state?.neko) {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.errorMsg = 'Por favor, vuelve al listado y selecciona una imagen.';
      } else {
        this.errorMsg = 'No se recibió ningún neko.';
      }
    }
  }

  async toggleFavorito() {
    if (!this.neko) return;
    
    const esFavAntes = this.esFavorito(this.neko.url);
    await this.favoritesService.toggleFavorite(this.neko);
     
    const toast = await this.toastController.create({
      message: esFavAntes ? 'Eliminado de favoritos' : 'Añadido a favoritos',
      duration: 1500,
      position: 'bottom',
      color: esFavAntes ? 'medium' : 'danger'
    }) as any;

    await toast.present();
  }

  esFavorito(url: string): boolean {
    return this.favoritesService.isFavorite(url);
  }

  volver() {
    this.router.navigateByUrl('/tabs/tab2');
  }
}