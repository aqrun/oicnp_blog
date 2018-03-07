import { NgModule } from '@angular/core'

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { SiteRoutingModule } from './site-routing.module'
import { SiteComponent } from './site.component';
import { LoginComponent } from './login/login.component';
import { CoreModule } from '../core/core.module'

@NgModule({
    imports:[
        SiteRoutingModule,
        CoreModule,
        NgZorroAntdModule,
    ],
    declarations: [
        SiteComponent,
        LoginComponent,
    ]
})
export class SiteModule {

}