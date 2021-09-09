import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { LoginHeaderComponent } from './login-header/login-header.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material-module';

@NgModule({
  declarations: [
    LoginHeaderComponent,
    LoginComponent,
    HomepageComponent,
    HeaderComponent,
  ],
  imports: [CommonModule, ShareRoutingModule, MaterialModule],
  exports: [HeaderComponent],
})
export class ShareModule {}
