import { Component } from '@angular/core';

@Component({
  selector: 'app-help-out',
  templateUrl: './help-out.component.html',
  styleUrl: './help-out.component.scss'
})
export class HelpOutComponent {
  onSubmit(event:Event){
    console.log("Form Submitted");
    const form = event.target as HTMLFormElement;
    console.log("First Name: ", form['fname'].value);
    console.log("Last Name: ", form['lname'].value);
    console.log("Email: ", form['email'].value);
    console.log("Mobile Phone: ", form['mobile_phone'].value);
  }
}
