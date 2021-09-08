import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';


@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule,
    ShareRoutingModule
  ]
})
export class ShareModule { }
