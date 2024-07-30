import { Injectable } from '@angular/core';
import { supabase } from './auth.service';

const CONTACT_FORM = 'contact_form';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  async insertPost(
    groupSelectionMethod: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    message: string
  ) {
    console.log('About to insert');

    // Check authentication state
    const user = supabase.auth.getUser();

    if (!user) {
      console.log('User is not authenticated');

      console.error('User is not authenticated');
      return;
    }

    try {
      // Insert data into contact_form table
      const { data, error } = await supabase
        .from(CONTACT_FORM)
        .insert({ groupSelectionMethod, firstName, lastName, email, phone, message });

      if (error) {
        console.error('Error inserting data:', error.message);
      }

      if (data) {
        console.log('Data inserted successfully:', data);
      }
    } catch (error) {
      console.error('Error inserting data:');
    }
  }
}
