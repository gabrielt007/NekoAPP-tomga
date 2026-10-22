import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class NekoService {
    
    private apiUrl = 'https://nekos.best/api/v2';

    constructor(private http: HttpClient) { }


}
