import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PdfHelper } from 'src/app/helpers/pdf.helper';
import { Commission, TypeChecking, UnpaidOrder } from 'src/app/models/commission/commission.model';
import { Section } from 'src/app/models/commission/section.enum';


@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.scss']
})
export class CustomerCardComponent extends TypeChecking implements OnInit {
  @Input() commission: Commission;
  @Input() unpaidOrder: UnpaidOrder;
  @Input() type: Section;
  constructor(private snackBar: MatSnackBar) {
    super();
  }

  ngOnInit(): void {
  }


  public get valid(): boolean {
    return this.unpaidOrder?.CommissionAllowed;
  }

  public get available(): boolean {
    return this.commission?.IsAvailable;
  }

  public seePdf(): void {
    return PdfHelper.openPdfNewTab(this.isUnpaid ? this.unpaidOrder.InvoiceLink : this.commission.InvoiceLink, this.snackBar);
  }

}
