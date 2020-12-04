import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiEndpoints } from '../../../assets/api/api.endpoints';

@Injectable({
    providedIn: 'root',
})
export class BaseService {

    constructor(public http: HttpClient) {}

    get<T>(endpoint: string, options?: T): Observable<T | T[]> {
        return this.http.get<T | T[]>(apiEndpoints.BASE_URL + endpoint, options);
    }

    post<T>(endpoint: string, body: T, options?: T): Observable<T | T[]> {
        return this.http.post<T | T[]>(apiEndpoints.BASE_URL + endpoint, body, options);
    }

    update<T>(endpoint: string, body: T, options?: T): Observable<T | T[]> {
        return this.http.patch<T | T[]>(apiEndpoints.BASE_URL + endpoint, body, options);
    }

    delete<T>(endpoint: string, options?: T): Observable<T | T[]> {
        return this.http.delete<T | T[]>(apiEndpoints.BASE_URL + endpoint, options);
    }
}
