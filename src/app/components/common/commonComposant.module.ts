import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalSelectorComponent } from './horizontal-selector/horizontal-selector.component';
import { InfoPanelComponent } from './info-panel/info-panel.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PrintPanelComponent } from './print-panel/print-panel.component';
import { AmountPanelComponent } from './amount-panel/amount-panel.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IconSelectorComponent } from './icon-selector/icon-selector.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HorizontalSelectorComponent,
    InfoPanelComponent,
    PrintPanelComponent,
    AmountPanelComponent,
    IconSelectorComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatToolbarModule,
    RouterModule
  ],
  exports: [
    HorizontalSelectorComponent,
    InfoPanelComponent,
    PrintPanelComponent,
    AmountPanelComponent,
    IconSelectorComponent,
    ToolbarComponent
  ]
})
export class CommonComposantModule { }
