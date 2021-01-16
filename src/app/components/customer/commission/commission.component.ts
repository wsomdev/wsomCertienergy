import { Component, OnInit } from '@angular/core';
import { SECTIONS } from 'src/app/helpers/static/sections';
import { TEXT_AMOUNT, TEXT_COMMISSIONS_BAR, TEXT_INFO_PANEL, TEXT_PRINT, TEXT_UNPAID_BAR } from 'src/app/helpers/static/text';
import { VIEWS } from 'src/app/helpers/static/views';
import { Commission, UnpaidOrder } from 'src/app/models/commission/commission.model';
import { Section } from 'src/app/models/commission/section.enum';
import { IReference } from 'src/app/models/common/reference.interface';
import { CommissionService } from 'src/app/services/commission/commission.service';


@Component({
  selector: 'app-commission',
  templateUrl: './commission.component.html',
  styleUrls: ['./commission.component.scss']
})
export class CommissionComponent implements OnInit {
  public textToShow = TEXT_INFO_PANEL;
  public printText = TEXT_PRINT;
  public amountText = TEXT_AMOUNT;
  public unpaidBarText = TEXT_UNPAID_BAR;
  public sections: IReference[] = SECTIONS;
  public availableViews = VIEWS;
  public isPanelVisible = this.textToShow?.length ? true : false;
  public totalUnpaid: number;
  public totalCommissions: number;
  public commissions: Commission[];
  public unpaidOrder: UnpaidOrder[];
  public selectedSection = this.sections?.[0];
  public selectedView = this.availableViews?.[0];
  constructor(public comService: CommissionService) { }

  ngOnInit(): void {
    this.init();
  }

  public init(): void {
    this.comService.getCommission().subscribe(res => {
      this.totalCommissions = res.TotalCommissions;
      this.totalUnpaid = res.TotalUnpaid;
      this.commissions = res.Commissions;
      this.unpaidOrder = res.UnpaidOrders;
      this.comService.loadingSubject.next(false);
    });
  }

  public changeCategory(category: IReference): void {
    this.selectedSection = category;
  }

  public changeView(view: IReference): void {
    this.selectedView = view;
  }

  public get amount(): number {
    return this.selectedSection.reference === Section.COMMISSION ? this.totalCommissions : this.totalUnpaid;
  }

  public get isUnpaid(): boolean {
    return this.selectedSection.reference === Section.UNPAID;
  }

  public get orders(): Commission[] | UnpaidOrder[] {
    return this.isUnpaid ? this.unpaidOrder : this.commissions;
  }

  public get barText(): string {
    return this.isUnpaid ? TEXT_UNPAID_BAR : TEXT_COMMISSIONS_BAR;
  }
}
