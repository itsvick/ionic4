import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-confirm-box',
  templateUrl: './confirm-box.component.html',
  styleUrls: ['./confirm-box.component.scss'],
})
export class ConfirmBoxComponent implements OnInit {
  constructor(private popOverController: PopoverController,
    private navParams: NavParams) { }

  ngOnInit() {
    let a = 'test';
    let b = 'test1';
    let c = a === b;
    console.log("c", c);
    
    console.table(this.navParams);
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.popOverController.dismiss(onClosedData);
  }

}
