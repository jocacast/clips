import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { map, delay} from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showAlert : boolean = false;
  alertMsg = "Please wait! You are being loged";
  alertColor="blue";
  inSubmission: boolean = false;

  credentials = {
    email : "",
    password : ""
  }
  constructor(
    private auth : AngularFireAuth
  ) {}

  ngOnInit(): void {
  }

  async login(){
    this.showAlert = true;
    this.alertMsg = "Please wait! You are being logged in";
    this.alertColor="blue";
    this.inSubmission = true;
    try{
      await this.auth.signInWithEmailAndPassword(
        this.credentials.email, this.credentials.password
      )
    }catch(e){
      console.error(e);
      this.alertMsg = "Something went wrong, please try again later";
      this.alertColor="red";
      this.inSubmission = false;
      return;
    }
    this.alertMsg = "Successful log in";
    this.alertColor="green";
    
  }

}
