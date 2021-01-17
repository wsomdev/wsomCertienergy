import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { PdfHelper } from 'src/app/helpers/pdf.helper';
import { Commission, TypeChecking, UnpaidOrder } from 'src/app/models/commission/commission.model';
import { Section } from 'src/app/models/commission/section.enum';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { UnpaidListDataSource } from './unpaid-order.datasource';
import { CommissionsListDataSource } from './commission.datasource';
import { IOrder } from 'src/app/models/commission/commission.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-commission-table',
  templateUrl: './commission-table.component.html',
  styleUrls: ['./commission-table.component.scss']
})
export class CommissionTableComponent extends TypeChecking implements OnInit, AfterViewInit, OnDestroy {
  @Input() commissions: Commission[];
  @Input() unpaidOrders: UnpaidOrder[];
  @Input() type: Section;
  @ViewChild(MatTable) table: MatTable<Commission | UnpaidOrder>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) set matSort(sort: MatSort) {
    this.dataSource.sort = sort;
  }
  public commonColumnDesktop = ['customer', 'address', 'invoice'];
  public commonColumnMobile = ['customer'];
  public displayedColumns: string[];
  public dataSource: MatTableDataSource<Commission | UnpaidOrder>;
  public handleHandset: Subscription;
  constructor(private snackBar: MatSnackBar, private breakpointObserver: BreakpointObserver) {
    super();
  }

  ngOnInit(): void {
    this.initDataSource();
    this.handleHandset = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map((result: BreakpointState) => result.matches),
        shareReplay()
      ).subscribe((v) => this.initColumns(v));
  }

  ngAfterViewInit(): void {
    this.table.dataSource = this.dataSource;
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.handleHandset.unsubscribe();
  }

  public initDataSource(): void {
    this.dataSource = this.isCommission ? new CommissionsListDataSource(this.commissions) : new UnpaidListDataSource(this.unpaidOrders);
  }

  public initColumns(isHandSet: boolean): void {
    const col = isHandSet ? this.commonColumnMobile : this.commonColumnDesktop;
    this.displayedColumns = this.isCommission ?
      [...col, 'availableAmount', 'unavailableAmount', 'see'] : [...col, 'validity', 'unpaidAmount', 'see'];
  }

  public seePdf(order: IOrder): void {
    return PdfHelper.openPdfNewTab(this.isUnpaid ? order.InvoiceLink : order.InvoiceLink, this.snackBar);
  }

  public isAvailable(element: Commission): boolean {
    return element.IsAvailable;
  }

  public get defaultSort(): { name: string, direction: 'asc' | 'desc' } {
    return { name: 'customer', direction: 'asc' };
  }
}
