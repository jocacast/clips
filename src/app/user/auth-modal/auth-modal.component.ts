import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css']
})
export class AuthModalComponent implements OnInit, OnDestroy {
  auth : string = "auth";
  isLoginFormHidden : boolean = false;
  isRegisterFormHidden : boolean = true

  constructor(public modal : ModalService) { }

  ngOnInit(): void {
    this.modal.register('auth');
  }

  ngOnDestroy() : void{
    this.modal.unregister('auth');
  }

  showLoginForm(){
    this.isRegisterFormHidden = true;
    this.isLoginFormHidden = false;
  }

  showRegisterForm(){
    this.isRegisterFormHidden = false;
    this.isLoginFormHidden = true;
  }
  

}
