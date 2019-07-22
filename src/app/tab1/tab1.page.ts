import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { CommonService } from '../util/common.service';
import { PopoverController } from '@ionic/angular';
import { ConfirmBoxComponent } from '../confirm-box/confirm-box.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  redColor = true;
  constructor(
    private router: Router,
    private commonService: CommonService,
    public popoverController: PopoverController
  ) { }

  async test() {

    const loading = await this.commonService.getLoader();
    console.log("loading", typeof loading, loading);

    await loading.present();

    setTimeout(async () => {
      await loading.dismiss();
    }, 100);
    const navigationExtras: NavigationExtras = {
      state: {
        profile: {
          name: 'Vivek',
          age: 27,
          location: 'Bangalore'
        },
        isAllocated: true
      }
    }
    this.router.navigateByUrl('/about', navigationExtras);
  }


  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: ConfirmBoxComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  test1() {
    console.log("test1");
  }
  test2() {
    console.log("test2");
  }
}
