export interface ICommission {
    Amount: number;
    IsAvailable: boolean;
}

export interface IUnpaidOrder {
    UnpaidAmount: number;
    CommissionAllowed: boolean;
}

export interface IOrder {
    OrderId: string;
    OrderCreationDate: string;
    Customer: string;
    Address: string;
    InvoiceNumber: string | null;
    InvoiceLink: string;
}
