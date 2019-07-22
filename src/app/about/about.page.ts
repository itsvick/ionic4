import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart, RouterStateSnapshot } from '@angular/router';
import { map, filter } from 'rxjs/operators';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  state$: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController
  ) {

    // let data = this.route.snapshot.paramMap.get('profile') 
    //.subscribe((data) => {

    // });

  }
  
  ngOnInit() {
    console.log("window", window.history.state.profile);
    
    this.state$ = this.route.paramMap
      .pipe(map(() => window.history.state))
  }

  goToContact() {
     this.router.navigate(['about/contact']);
   // this.navCtrl.navigateForward('about/contact');
  }

}
