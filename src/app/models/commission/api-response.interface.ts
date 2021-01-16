import { Commission, UnpaidOrder } from './commission.model';

export interface IApiCommissionResponse {
    TotalUnpaid: number;
    TotalCommissions: number;
    Commissions: Commission[];
    UnpaidOrders: UnpaidOrder[];
}
