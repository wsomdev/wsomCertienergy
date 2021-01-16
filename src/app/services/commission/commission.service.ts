import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize, map, switchMap } from 'rxjs/operators';
import { LINK } from 'src/app/helpers/static/link';
import { IApiCommissionResponse } from 'src/app/models/commission/api-response.interface';
import { Commission } from 'src/app/models/commission/commission.model';
import { ApiService } from '../api/api.service';


@Injectable()
export class CommissionService {
    public loadingSubject = new BehaviorSubject<boolean>(false);
    public $loading = this.loadingSubject.asObservable();

    constructor(private api: ApiService) { }

    public getCommission(): Observable<IApiCommissionResponse> {
        this.loadingSubject.next(true);
        return this.api.get(LINK).pipe(finalize(() => this.loadingSubject.next(false))) as Observable<IApiCommissionResponse>;
    }

    public getCommissionAvailable(): Observable<Commission[]> {
        return this.api.get(LINK).pipe(
            map((values: IApiCommissionResponse) => {
                return values.Commissions.filter(c => c.IsAvailable);
            })
        );
    }
}
