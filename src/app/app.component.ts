import { Component, QueryList } from '@angular/core';

import { Platform, ModalController, AlertController, ActionSheetController, MenuController, IonRouterOutlet, PopoverController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { RouterOutlet, Router, GuardsCheckEnd } from '@angular/router';
import { filter, tap, takeWhile, take, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

// @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private actionSheetCtrl: ActionSheetController,
    private menu: MenuController,
    private popOverCtrl: PopoverController,
    private router: Router,
    private menuCtrl: MenuController
  ) { }

  ngOnInit() {
    this.initializeApp();
  }

  initializeApp() {
    this.router.events
      .pipe(
        filter((e) => e instanceof GuardsCheckEnd),
        filter((e: GuardsCheckEnd) => !e.shouldActivate)
      )
      .subscribe((e) => {
        console.log('show Toast')
      });

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.registerHardwareBackButton();
      this.menuCtrl.enable(true, 'first');
      this.menuCtrl.open('first');
    });
  }

  registerHardwareBackButton() {
    this.platform.backButton.subscribeWithPriority(999, async () => {


      console.log('hererer');
      // first close any alets, modal etc. 

      const actionsheet = await this.actionSheetCtrl.getTop();
      if (actionsheet) {
        actionsheet.dismiss();
        return;
      }

      const modal = await this.modalCtrl.getTop();
      if (modal) {
        modal.dismiss();
        return;
      }

      const alert = await this.alertCtrl.getTop();
      if (alert) {
        alert.dismiss();
        return;
      }

      const popover = await this.popOverCtrl.getTop();
      if (popover) {
        popover.dismiss();
        return;
      }

      const menu = await this.menu.getOpen();
      if (menu) {
        menu.close();
        return;
      }

      /*         const outlet: any = this.routerOutlets.first();
              const activeView = outlet.activated.instance; // the active view instance          
              //now calls the onBackButtonPress function in that instance            
              if (activeView.onBackButtonPress) {
                activeView.onBackButtonPress();
              } else {
                //some logic about what to do if onBackButtonPress is not defined, default action       
              }
       */
    });
  }
}
