import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MatInputModule } from '@angular/material/input'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const mat_modules = [
    MatButtonModule, MatCheckboxModule, MatInputModule,BrowserAnimationsModule,
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
        ...mat_modules,
    ]
})
export class CoreModule {

}