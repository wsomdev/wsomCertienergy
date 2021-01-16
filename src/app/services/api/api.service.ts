import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { TOKEN } from 'src/app/helpers/static/token';
import { AppError } from 'src/app/models/api-error.interface';
import { IApiCommissionResponse } from 'src/app/models/commission/api-response.interface';


@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(public http: HttpClient) { }

    public get<T>(url: string): Observable<T> {
        const options = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: TOKEN
            },
            responseType: 'json' as 'json'
        };
        return this.http.get(url, options) as Observable<T>;
    }
}
