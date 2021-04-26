import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class BaseService {

    constructor(public http: HttpClient) {}

    get<T>(endpoint: string, options?: {}): Observable<T> {
        return this.http.get<T>(environment.BASE_URL + endpoint, options);
    }

    post<T>(endpoint: string, body: any, options?: {}): Observable<T> {
        return this.http.post<T>(environment.BASE_URL + endpoint, body, options);
    }

    update<T>(endpoint: string, body: any, options?: {}): Observable<T> {
        return this.http.patch<T>(environment.BASE_URL + endpoint, body, options);
    }

    delete<T>(endpoint: string, options?: {}): Observable<T> {
        return this.http.delete<T>(environment.BASE_URL + endpoint, options);
    }
}
