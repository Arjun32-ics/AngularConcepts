import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm : NgForm
  defaultquestion= 'teacher';
  answer='';
  genders = ['male','female'];
  user = {
    username : '',
    mail : '',
    secretquestion : '',
    answer : '',
    gender:''
  }
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   Userdata : {
    //     username: suggestedName,
    //     email : ''
    //   },
    //   secret : 'pet',
    //   questionanswer: '',
    //   gender : 'male'
    // })
    this.signupForm.form.patchValue({
      Userdata:{
        username: 'arjun',//suggestedName,
        email : 'shubh.trip2@gmail.com'
      },
      gender : 'female'
    });
    console.log(this.signupForm);
  }

  // onSubmit(form: NgForm){
  //   console.log(form)
  // }

  onSubmit(){
    //console.log(this.signupForm)
    this.submitted = true;
    this.user.username = this.signupForm.value.Userdata.username;
    this.user.mail = this.signupForm.value.Userdata.email;
    this.user.secretquestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionanswer;
    this.user.gender = this.signupForm.value.gender;
this.signupForm.reset();

  }
}
