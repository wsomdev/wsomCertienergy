import { Commission, UnpaidOrder } from 'src/app/models/commission/commission.model';
import { MatTableDataSource } from '@angular/material/table';

export class UnpaidListDataSource extends MatTableDataSource<UnpaidOrder> {

    sortingDataAccessor = (data: UnpaidOrder, sortHeaderId: string) => {
        switch (sortHeaderId) {
            case 'customer':
                return data.Customer;
            case 'address':
                return data.Address;
            case 'invoice':
                return data.InvoiceNumber;
            case 'validity':
                return data.CommissionAllowed.toString();
            case 'unpaidAmount':
                return data.UnpaidAmount;
            default:
                return '';
        }
    }

    constructor(datas: UnpaidOrder[]) {
        super();
        this.data = datas;
    }
}
