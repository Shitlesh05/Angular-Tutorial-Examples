import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TemplateDrivenForms18';

  @ViewChild('myForm') form! : NgForm ;
  defaultCountry = 'india';
  firstname!: string;
  lastname!: string;
  email!: string;
  gen!: string;
  country!: string;

  defaultGender = 'Male';

  gender = [
    {id: '1', value: 'Male'},
    {id: '2', value: 'Female'},
    {id: '3', value: 'Others'}
  ]

  onSubmit(){
    console.log(this.form);
    this.firstname = this.form.value.personalDetails.firstname;
    this.lastname = this.form.value.personalDetails.lastname;
    this.email = this.form.value.personalDetails.email;
    this.gen = this.form.value.gender;
    this.country = this.form.value.country;

    this.form.reset();
  }

  setDefaultValues(){
    /*this.form.value.personalDetails.firstname = 'Shitlesh';
    this.form.value.personalDetails.lastname = 'Kaloshiya';
    this.form.value.personalDetails.email = 'shitleshk46@gmail.com';*/

    // setValue()
    /*this.form.setValue({
      country: '',
      gender: '',
      hobbies: '',
      personalDetails: {
        firstname : 'Shitlesh',
        lastname : 'Kaloshiya' , 
        email : 'shitleshk46@gmail.com'
      }
    })*/

    //patchValue()
    this.form.form.patchValue({
      personalDetails: {
        firstname : 'Shitlesh',
        lastname : 'Kaloshiya' , 
        email : 'shitleshk46@gmail.com'
      }
    })

  }

}
