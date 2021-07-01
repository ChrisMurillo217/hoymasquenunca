import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './home/index/index.component';

const APP_ROUTES: Routes = [
    {path: '', component: IndexComponent},
    {path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
    imports: [ RouterModule.forRoot(APP_ROUTES) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }