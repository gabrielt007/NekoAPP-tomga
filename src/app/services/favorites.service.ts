import { Injectable, inject } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { BehaviorSubject } from 'rxjs';
import { NekoItem } from '../models/neko.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private readonly STORAGE_KEY = 'favorite_nekos';
  
  private favoritesSubject = new BehaviorSubject<NekoItem[]>([]);
  public favorites$ = this.favoritesSubject.asObservable();

  constructor() {
    this.cargarFavoritos();
  }

  private async cargarFavoritos() {
    try {
      const { value } = await Preferences.get({ key: this.STORAGE_KEY });
      if (value) {
        this.favoritesSubject.next(JSON.parse(value));
      }
    } catch (error) {
      console.error('[FavoritesService] Error al cargar favoritos:', error);
    }
  }

  getFavorites(): NekoItem[] {
    return this.favoritesSubject.value;
  }

  isFavorite(url: string): boolean {
    return this.favoritesSubject.value.some(n => n.url === url);
  }

  async toggleFavorite(neko: NekoItem): Promise<void> {
    let favoritos = this.favoritesSubject.value;
    const existe = favoritos.some(n => n.url === neko.url);

    if (existe) {
      favoritos = favoritos.filter(n => n.url !== neko.url);
    } else {
      favoritos = [...favoritos, neko];
    }

    this.favoritesSubject.next(favoritos);

    try {
      await Preferences.set({
        key: this.STORAGE_KEY,
        value: JSON.stringify(favoritos)
      });
    } catch (error) {
      console.error('[FavoritesService] Error al guardar favoritos:', error);
    }
  }
}