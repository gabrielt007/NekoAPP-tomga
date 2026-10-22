import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class NekoService {

    private apiUrl = 'https://nekos.best/api/v2';

    constructor(private http: HttpClient) { }

    

}
