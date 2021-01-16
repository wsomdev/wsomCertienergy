import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IReference } from 'src/app/models/common/reference.interface';

@Component({
  selector: 'app-print-panel',
  templateUrl: './print-panel.component.html',
  styleUrls: ['./print-panel.component.scss']
})
export class PrintPanelComponent implements OnInit {
  @Input() text: IReference[];

  @Output() print = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  public onPrint(): void {
    this.print.emit();
  }
}
