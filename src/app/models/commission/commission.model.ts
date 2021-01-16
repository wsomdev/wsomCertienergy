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

    public get isUnpaid(): boolean {
        return this.type === Section.UNPAID;
    }

    public get isCommission(): boolean {
        return !this.isUnpaid;
    }
}
