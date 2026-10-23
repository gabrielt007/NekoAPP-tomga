import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface NekoItem {
  artist_name: string;
  artist_href: string;
  source_url: string;
  url: string;
}

export interface NekoResponse {
  results: NekoItem[];
}

@Injectable({
    providedIn:'root'
})
export class NekoService {

    private apiUrl = 'https://nekos.best/api/v2';

    constructor(private http: HttpClient) { }

    getNeko(name:string, type:number):Observable<any>{
        return this.http.get(`${this.apiUrl}/search?query=${name}&type=${type}`);
    }

    getNekos(): Observable<NekoResponse> {
    return this.http.get<NekoResponse>(this.apiUrl);
  }

}
