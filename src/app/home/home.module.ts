import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { GuestComponent } from './guest/guest.component';
import { InformationComponent } from './information/information.component';
import { IndexComponent } from './index/index.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AboutComponent,
    FooterComponent,
    HomeComponent,
    GuestComponent,
    InformationComponent,
    IndexComponent
  ],
  exports:[
    IndexComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HomeModule { }
