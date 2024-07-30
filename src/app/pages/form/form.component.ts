import { Component } from '@angular/core';
import { SupabaseService } from '../../services/supabase-client.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  groupSelectionMethods: string[] = ['Baptism', 'Get-Connected', 'Help-Out'];
  groupSelectionMethod: string = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phone: string = '';
  message: string = '';


  constructor(private supabaseService: SupabaseService) {
    
  }
  
  submitForm = async () => {
    console.log('Form about to be submitted!', this.firstName, this.lastName, this.email, this.phone, this.message, this.groupSelectionMethod);
    this.supabaseService.insertPost(
      this.groupSelectionMethod,
      this.firstName,
      this.lastName,
      this.email,
      this.phone,
      this.message
    );

    this.resetForm();
  }

  resetForm() {
    console.log('reset Form')
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.phone = '';
    this.message = '';
    this.groupSelectionMethod = '';
  }
}
