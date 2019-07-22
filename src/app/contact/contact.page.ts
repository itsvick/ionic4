import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PopoverController, Platform, ModalController } from '@ionic/angular';
import { ConfirmBoxComponent } from '../confirm-box/confirm-box.component';
import { CommonService } from '../util/common.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Location } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  @ViewChild('f') iframe: ElementRef;
  consumptionFaqUrl;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public popoverController: PopoverController,
    public modalCtrl: ModalController,
    private platform: Platform,
    private commonService: CommonService,
    private domSanitizer: DomSanitizer,
    private location: Location
  ) {
    console.log("tabs Name", this.commonService.currentTabName);
    this.consumptionFaqUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://ntpstagingall.blob.core.windows.net/public/faq/consumption-faqs.html?selectedlang=en');;
  }

  ngOnInit() {
    console.log("cam re");

    this.platform.backButton.subscribeWithPriority(0, () => {
      alert('test');
      console.log('test');
    });
  }


  goBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
    // this.location.back();
  }

  handleBackButton() {
    console.log("iframe", this.iframe);

    console.log("Inside handleBackButton");
  }


  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: ConfirmBoxComponent,
      componentProps: {
        profile: {
          profile: {
            name: 'Vivek',
            age: 27,
            location: 'Bangalore'
          },
          isAllocated: true
        },
      },
      cssClass: 'popover-alert'
    });
    await popover.present();
    const data = await popover.onDidDismiss()
    console.log("ondidDismiss", data)
  }

  async ionCanLeave() {
    // this.router.navigate(['../']);
    return false;
  }

}
