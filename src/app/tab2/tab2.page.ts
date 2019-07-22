import { NavigationExtras, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private router: Router) {}
  test() {
    const navigationExtras: NavigationExtras = {
      state : {
        profile1: {
          name: 'Vivek123',
          age: 27,
          location: 'Bangalore'
        },
        isAllocated: true
      }
    }
    this.router.navigateByUrl('/about', navigationExtras );
  }
}
