import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  @ViewChild('contactForm') contactForm!: ElementRef;

  constructor() { }

  ngOnInit(): void { }

  sendEmail(event: Event) {
    event.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this.contactForm.nativeElement, 'YOUR_PUBLIC_KEY')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  }
}
