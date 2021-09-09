import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRoutingModule } from './activity-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { ShareModule } from '../share/share.module';

@NgModule({
  declarations: [SidebarComponent, NewsfeedComponent],
  imports: [CommonModule, ActivityRoutingModule, ShareModule],
})
export class ActivityModule {}
