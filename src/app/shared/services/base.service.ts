import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiEndpoints } from '../../../assets/api/api.endpoints';

@Injectable({
    providedIn: 'root',
})
export class BaseService {

    constructor(public http: HttpClient) {}

    get<T>(endpoint: string, options?: {}): Observable<T> {
        return this.http.get<T>(apiEndpoints.BASE_URL + endpoint, options);
    }

    post<T>(endpoint: string, body: any, options?: {}): Observable<T> {
        return this.http.post<T>(apiEndpoints.BASE_URL + endpoint, body, options);
    }

    update<T>(endpoint: string, body: any, options?: {}): Observable<T> {
        return this.http.patch<T>(apiEndpoints.BASE_URL + endpoint, body, options);
    }

    delete<T>(endpoint: string, options?: {}): Observable<T> {
        return this.http.delete<T>(apiEndpoints.BASE_URL + endpoint, options);
    }
}
