import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private _currentTabName: string;
  constructor(private loadingCtrl: LoadingController) { }

  /**
 * Returns Loading object with default config
 * @returns {object} Loading object
 */
  getLoader(): Promise<HTMLIonLoadingElement> {
    return this.loadingCtrl.create({
      duration: 30000,
      spinner: 'crescent'
    });
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingCtrl.create({
      spinner: null,
      duration: 5000,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

  set currentTabName(tabName: string) {
    this._currentTabName = tabName
  }

  get currentTabName() {
    return this._currentTabName;
  }
}
