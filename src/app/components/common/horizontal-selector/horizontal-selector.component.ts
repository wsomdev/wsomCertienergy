import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IReference } from 'src/app/models/common/reference.interface';

@Component({
  selector: 'app-horizontal-selector',
  templateUrl: './horizontal-selector.component.html',
  styleUrls: ['./horizontal-selector.component.scss']
})
export class HorizontalSelectorComponent implements OnInit {
  @Input() sections: IReference[];
  @Input() selected: IReference;

  @Output() updateSelected = new EventEmitter<IReference>();
  constructor() { }

  ngOnInit(): void {
  }

  public selectioChanged(selection: IReference): void {
    this.updateSelected.emit(selection);
  }

  public isSelected(selection: IReference): boolean {
    return selection.reference === this.selected.reference;
  }

  public get class(): {} {
    return { [this.selected.color]: true };
  }
}
