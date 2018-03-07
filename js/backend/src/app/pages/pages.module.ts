import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../core/core.module'
//import { PagesRoutingModule } from './pages.routing.module'
import { PagesComponent } from './pages.component'
import { DashboardModule } from './dashboard/dashboard.module'

@NgModule({
  imports: [
    CoreModule,
    //PagesRoutingModule,
    RouterModule,
    DashboardModule,
  ],
  declarations: [
    PagesComponent
  ],
})
export class PagesModule { }
