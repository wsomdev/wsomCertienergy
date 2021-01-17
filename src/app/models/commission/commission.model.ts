import { View } from '../common/view.enum';
import { ICommission, IOrder, IUnpaidOrder } from './commission.interface';
import { Section } from './section.enum';

export class Commission implements IOrder, ICommission {
    Amount: number;
    IsAvailable: boolean;
    OrderId: string;
    OrderCreationDate: string;
    Customer: string;
    Address: string;
    InvoiceNumber: string;
    InvoiceLink: string;
}

export class UnpaidOrder implements IOrder, IUnpaidOrder {
    UnpaidAmount: number;
    CommissionAllowed: boolean;
    OrderId: string;
    OrderCreationDate: string;
    Customer: string;
    Address: string;
    InvoiceNumber: string;
    InvoiceLink: string;
}


export class TypeChecking {
    public type: Section;
    public view: View;

    public get isUnpaid(): boolean {
        this.noTypeCheck();
        return this.type === Section.UNPAID;
    }

    public get isCommission(): boolean {
        this.noTypeCheck();
        return this.type === Section.COMMISSION;
    }

    public get isCardView(): boolean {
        this.noViewCheck();
        return this.view === View.CARDS;
    }

    public get isListView(): boolean {
        this.noViewCheck();
        return this.view === View.LIST;
    }

    private noViewCheck(): void {
        if (this.view === undefined) {
            console.error('No view find !');
        }
    }

    private noTypeCheck(): void {
        if (this.type === undefined) {
            console.error('No type find !');
        }
    }
}
