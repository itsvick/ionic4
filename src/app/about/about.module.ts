import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AboutPage } from './about.page';
import { ContactPage } from '../contact/contact.page';
import { ContactPageModule } from '../contact/contact.module';
import { Noback } from '../contact/no-back';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AboutPage
  },
  {
    path: 'contact',
    component: ContactPage, canDeactivate: [Noback]
  }

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AboutPage, ContactPage],
  providers: [Noback]
})
export class AboutPageModule { }
