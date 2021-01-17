import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { PdfHelper } from 'src/app/helpers/pdf.helper';
import { Commission, TypeChecking, UnpaidOrder } from 'src/app/models/commission/commission.model';
import { Section } from 'src/app/models/commission/section.enum';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { UnpaidListDataSource } from './unpaid-order.datasource';
import { CommissionsListDataSource } from './commission.datasource';
import { IOrder } from 'src/app/models/commission/commission.interface';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-commission-table',
  templateUrl: './commission-table.component.html',
  styleUrls: ['./commission-table.component.scss']
})
export class CommissionTableComponent extends TypeChecking implements OnInit, AfterViewInit {
  @Input() commissions: Commission[];
  @Input() unpaidOrders: UnpaidOrder[];
  @Input() type: Section;
  @ViewChild(MatTable) table: MatTable<Commission | UnpaidOrder>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) set matSort(sort: MatSort) {
    this.dataSource.sort = sort;
  }
  public commonColumn = ['customer', 'address', 'invoice'];
  public displayedColumns: string[];
  public dataSource: MatTableDataSource<Commission | UnpaidOrder>;

  constructor(private snackBar: MatSnackBar) {
    super();
  }

  ngOnInit(): void {
    this.initDataSource();
  }

  ngAfterViewInit(): void {
    this.table.dataSource = this.dataSource;
    this.dataSource.paginator = this.paginator;
  }

  public initDataSource(): void {
    this.displayedColumns = this.isCommission ?
      [...this.commonColumn, 'availableAmount', 'unavailableAmount', 'see'] : [...this.commonColumn, 'validity', 'unpaidAmount', 'see'];
    this.dataSource = this.isCommission ? new CommissionsListDataSource(this.commissions) : new UnpaidListDataSource(this.unpaidOrders);
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
