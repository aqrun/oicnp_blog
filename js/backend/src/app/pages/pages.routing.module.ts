import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core'

import { PagesComponent } from './pages.component'
import { DashboardComponent } from './dashboard/dashboard.component'

import { AuthGuard } from '../core/auth-guard.service'

const routes = [{
    path: '',
    component: PagesComponent,
    canActivate: [AuthGuard],
    children: [
        {
            path: '',
            children: [
                {path: 'dashboard', component: DashboardComponent},
                {path: 'users', loadChildren: './users/users.module#UsersModule'},
                {path: '', component: DashboardComponent},
            ]
        }
    ]
}];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class PagesRoutingModule {

}