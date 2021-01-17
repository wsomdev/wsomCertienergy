import { Commission } from 'src/app/models/commission/commission.model';
import { MatTableDataSource } from '@angular/material/table';

export class CommissionsListDataSource extends MatTableDataSource<Commission> {

    sortingDataAccessor = (data: Commission, sortHeaderId: string) => {
        switch (sortHeaderId) {
            case 'customer':
                return data.Customer;
            case 'address':
                return data.Address;
            case 'invoice':
                return data.InvoiceNumber;
            case 'availableAmount':
                return data.IsAvailable ? data.Amount : 0;
            case 'unavailableAmount':
                return data.IsAvailable ? 0 : data.Amount;
            default:
                return '';
        }
    }

    constructor(datas: Commission[]) {
        super();
        this.data = datas;
    }
}
