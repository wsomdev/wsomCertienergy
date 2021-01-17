import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommissionService } from 'src/app/services/commission/commission.service';
import { CommonComposantModule } from '../common/commonComposant.module';
import { CommissionComponent } from './commission/commission.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CustomerCardComponent } from './commission/customer-card/customer-card.component';
import { CommissionViewComponent } from './commission/commission-view/commission-view.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CustomerRoutingModule } from './customer-routing.module';
import { CommissionTableComponent } from './commission/commission-table/commission-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    CommissionComponent,
    CustomerCardComponent,
    CommissionViewComponent,
    CommissionTableComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    CommonComposantModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatSnackBarModule
  ],
  providers: [
    CommissionService
  ],
  exports: [
    CommissionComponent,
    CustomerCardComponent,
    CommissionViewComponent,
    CommissionTableComponent
  ]
})
export class CustomerModule { }
