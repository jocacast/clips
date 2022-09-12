import { Component, OnInit, Input, AfterContentInit, ContentChildren, QueryList} from '@angular/core';
import { LoginComponent } from 'src/app/user/login/login.component';
import { RegisterComponent } from 'src/app/user/register/register.component';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit, AfterContentInit {
  @Input() tabTitle : string = "";
  active : boolean = false;
  @ContentChildren(LoginComponent) loginForm : QueryList<LoginComponent> = new QueryList();
  @ContentChildren(RegisterComponent) componentForm : QueryList<RegisterComponent> = new QueryList();


  constructor() { }

  ngAfterContentInit(): void {
    console.log(this.loginForm);
    console.log(this.componentForm);
  }

  ngOnInit(): void {
  }

}
