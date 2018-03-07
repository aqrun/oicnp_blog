import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule,ReactiveFormsModule  } from '@angular/forms'

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { AuthGuard } from './auth-guard.service'
import { AuthService } from './auth.service'

const mat_modules = [
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
]

@NgModule({
    imports: [
        CommonModule,
        ...mat_modules,
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
    ],
    exports:[
        HeaderComponent,
        FooterComponent,
        CommonModule,
        ...mat_modules,
    ],
    providers: [
        AuthGuard,
        AuthService,
    ]
})
export class CoreModule {

}