import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.scss']
})
export class InfoPanelComponent implements OnInit {
  @Input() textToShow: string | string[];
  @Input() isList: boolean;
  @Output() closePanel = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  public close(): void {
    this.closePanel.emit();
  }
}
