import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { SiteModule } from './site/site.module'
import { PagesComponent } from './pages/pages.component'
import { DashboardComponent } from './pages/dashboard/dashboard.component'

import { AuthGuard } from './core/auth-guard.service'

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                children: [
                    {path: 'dashboard', component: DashboardComponent},
                    {path: 'users', loadChildren: './pages/users/users.module#UsersModule'},
                    {path: '', component: DashboardComponent},
                ]
            }
        ],
    },
    // { path: '', loadChildren: 'app/pages/pages.module#PagesModule',pathMatch: 'full'},
    //{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
    useHash: true,
};

@NgModule({
    imports: [
        SiteModule,
        RouterModule.forRoot(routes, config)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}