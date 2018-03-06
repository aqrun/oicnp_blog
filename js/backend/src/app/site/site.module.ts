import { NgModule } from '@angular/core'

import { SiteRoutingModule } from './site-routing.module'
import { SiteComponent } from './site.component';
import { LoginComponent } from './login/login.component';
import { CoreModule } from '../core/core.module'

@NgModule({
    imports:[
        SiteRoutingModule,
        CoreModule,
    ],
    declarations: [
        SiteComponent,
        LoginComponent,
    ]
})
export class SiteModule {

}