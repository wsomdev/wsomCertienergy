import { Component, Input, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { Commission, TypeChecking, UnpaidOrder } from 'src/app/models/commission/commission.model';
import { Section } from 'src/app/models/commission/section.enum';
import { IReference } from 'src/app/models/common/reference.interface';
import { View } from 'src/app/models/common/view.enum';
import { CommissionService } from 'src/app/services/commission/commission.service';


@Component({
  selector: 'app-commission-view',
  templateUrl: './commission-view.component.html',
  styleUrls: ['./commission-view.component.scss']
})
export class CommissionViewComponent extends TypeChecking implements OnInit {
  @Input() amount: number;
  @Input() barText: string;
  @Input() orders: Commission[] | UnpaidOrder[];
  @Input() type: Section;
  @Input() view: IReference;
  constructor(public matIconRegistry: MatIconRegistry, public comService: CommissionService) {
    super();
    { matIconRegistry.registerFontClassAlias('fontawesome', 'fa'); }
  }

  ngOnInit(): void {}

  public get class(): {} {
    return this.isUnpaid ? { 'background-warn': true } : { 'background-success': true };
  }
}
