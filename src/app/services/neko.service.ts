import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NekoItem, NekoResponse } from '../models/neko.model'; 

@Injectable({
  providedIn: 'root',
})
export class NekoService {
  private readonly apiUrl = 'https://nekos.best/api/v2';
  private http = inject(HttpClient);

  search(
    query: string,
    category: string = 'neko',
    amount: number = 20,
    esGif: boolean = false
  ): Observable<NekoResponse> {
    let params = new HttpParams()
      .set('type', esGif ? '2' : '1')
      .set('amount', String(amount))
      .set('query', query ?? '');

    if (category) {
      params = params.set('category', category);
    }

    return this.http
      .get<NekoResponse>(`${this.apiUrl}/search`, { params })
      .pipe(
        catchError((error) => {
          console.error('[NekoService] Error en search():', error);
          return throwError(() => error);
        })
      );
  }

  getByCategory(
    category: string = 'neko',
    amount: number = 20
  ): Observable<NekoResponse> {
    const params = new HttpParams()
      .set('amount', String(amount));

    return this.http
      .get<NekoResponse>(`${this.apiUrl}/${category}`, { params })
      .pipe(
        catchError((error) => {
          console.error('[NekoService] Error en getByCategory():', error);
          return throwError(() => error);
        })
      );
  }
}