/**
 * Created by steffen.koehler on 06.07.17.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './components/content/list-view/user-details/user-details.component';
import { ContentComponent } from './components/content/content.component';


const routes: Routes = [
    { path: '', redirectTo: '/content', pathMatch: 'full' },
    { path: 'content',  component: ContentComponent },
    { path: 'userDetails', component: UserDetailsComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
