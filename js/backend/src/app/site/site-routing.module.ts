import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { SiteComponent } from './site.component'
import { LoginComponent} from './login/login.component'

const routes: Routes = [
    {
        path: '',
        component: SiteComponent,
        children: [
            {path: 'login', component: LoginComponent}
        ]
    },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SiteRoutingModule {}