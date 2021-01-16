import { Component, Input, OnInit } from '@angular/core';
import { IReference } from 'src/app/models/common/reference.interface';

@Component({
  selector: 'app-amount-panel',
  templateUrl: './amount-panel.component.html',
  styleUrls: ['./amount-panel.component.scss']
})
export class AmountPanelComponent implements OnInit {
  @Input() amount: number;
  @Input() text: string;

  constructor() { }

  ngOnInit(): void {
  }
}
