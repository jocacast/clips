import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { AuthService } from '../services/auth.service';
import {AngularFireAuth} from '@angular/fire/compat/auth';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  userName : string | null | undefined = null;

  constructor(
    public modal : ModalService,
    public auth : AuthService,
    private afAuth : AngularFireAuth
    ){
    this.afAuth.user.subscribe(user => this.userName = user?.email);
  }

  ngOnInit(): void {
  }

  openModal($event : Event, modalId : string) : void{
    $event.preventDefault();
    this.modal.toggleModal(modalId);
  }
  
  async logout($event : Event){
    $event.preventDefault();
    await this.afAuth.signOut();
  }

}
