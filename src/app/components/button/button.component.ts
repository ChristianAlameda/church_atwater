import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label: string = 'Label';
  @Input() url?: string = '';
  @Output() onClick = new EventEmitter<any>();

  onclickButton(event:any): void {
    this.onClick.emit(event);
    if (this.url) {
      window.location.href = this.url;
    }
  }
}
