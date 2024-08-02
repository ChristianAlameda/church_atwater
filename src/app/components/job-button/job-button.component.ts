import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-job-button',
  templateUrl: './job-button.component.html',
  styleUrls: ['./job-button.component.scss']
})
export class JobButtonComponent {
  @Input() label: string = 'Label';
  @Input() url?: string = '';
  @Output() onClick = new EventEmitter<any>();

  onclickButton(event:any): void {
    this.onClick.emit(event);
    if (this.url) {
      window.location.href = this.url;
    }
  }

  openEmailClient() {
    const email = 'atwaternazarene@gmail.com';
    const subject = 'I would like to be baptized';
    const encodedSubject = subject.replace(/ /g, '%20');
    const body = 'My name is _____ and I want to be baptized.';
    const encodedBody = body.replace(/ /g, '%20');
    
    window.location.href = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
    }
}
