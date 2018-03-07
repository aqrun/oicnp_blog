import { NgModule } from '@angular/core'

import { UserRoutingModule } from './users-routing.module'
import { UsersComponent } from './users.component'


@NgModule({
    imports: [
        UserRoutingModule
    ],
    declarations: [
        UsersComponent,
    ]
})
export class UsersModule {

}