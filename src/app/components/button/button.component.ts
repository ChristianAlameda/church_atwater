import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() buttonClass: string = ''; // Input property for button classes
  @Output() clicked: EventEmitter<void> = new EventEmitter<void>(); // Output event emitter

  handleClick() {
    this.clicked.emit(); // Emit click event to parent component
  }
}
