/**
 * Created by steffen.koehler on 06.07.17.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListViewComponent } from './components/content/list-view/list-view.component';
import { UserDetailsComponent } from './components/content/list-view/user-details/user-details.component';


const routes: Routes = [
    { path: '', redirectTo: '/listView', pathMatch: 'full' },
    { path: 'listView',  component: ListViewComponent },
    { path: 'userDetails', component: UserDetailsComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
