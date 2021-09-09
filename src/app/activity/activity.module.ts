import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRoutingModule } from './activity-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';


@NgModule({
  declarations: [
    SidebarComponent,
    NewsfeedComponent
  ],
  imports: [
    CommonModule,
    ActivityRoutingModule
  ]
})
export class ActivityModule { }
