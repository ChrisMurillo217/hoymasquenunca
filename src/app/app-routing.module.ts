import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './home/index/index.component';
import { PaymentComponent } from './payment/payment.component';
import { RegistroComponent } from './registro/registro.component';

const APP_ROUTES: Routes = [
    {path: '', component: IndexComponent, pathMatch: 'full'},
    {path: 'pago', component: PaymentComponent},
    {path: 'registro', component: RegistroComponent},
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [ RouterModule.forRoot(APP_ROUTES) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }