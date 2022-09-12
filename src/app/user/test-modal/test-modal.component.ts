import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-test-modal',
  templateUrl: './test-modal.component.html',
  styleUrls: ['./test-modal.component.css']
})
export class TestModalComponent implements OnInit, OnDestroy{
  test : string = 'test';
  constructor(public modal : ModalService) { }

  ngOnInit(): void {
    this.modal.register('test');
  }

  ngOnDestroy() : void{
    this.modal.unregister('test');
  }

}
