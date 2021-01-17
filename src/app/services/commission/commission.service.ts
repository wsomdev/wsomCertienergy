import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LINK } from 'src/app/helpers/static/link';
import { IApiCommissionResponse } from 'src/app/models/commission/api-response.interface';
import { ApiService } from '../api/api.service';


@Injectable()
export class CommissionService {
    public $loading = { get: new BehaviorSubject<boolean>(false) };

    constructor(private api: ApiService) { }

    public getCommission(): Observable<IApiCommissionResponse> {
        this.$loading.get.next(true);
        return this.api.get(LINK).pipe(finalize(() => this.$loading.get.next(false))) as Observable<IApiCommissionResponse>;
    }
}
