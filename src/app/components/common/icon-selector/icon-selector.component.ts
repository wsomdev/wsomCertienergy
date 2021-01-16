import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IReference } from 'src/app/models/common/reference.interface';

@Component({
  selector: 'app-icon-selector',
  templateUrl: './icon-selector.component.html',
  styleUrls: ['./icon-selector.component.scss']
})
export class IconSelectorComponent implements OnInit {
  @Input() availableViews: IReference[];
  @Input() selected: IReference;

  @Output() updateSelected = new EventEmitter<IReference>();

  constructor() { }

  ngOnInit(): void {
  }

  public getTooltip(type: string): string {
    return this.availableViews.find(v => v.reference === type)?.display;
  }

  public selectioChanged(view: string): void {
    this.updateSelected.emit(this.availableViews.find(v => v.reference === view));
  }

  public isSelected(view: string): boolean {
    return view === this.selected.reference;
  }
}
