import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {MenuDetailComponent} from './menu-detail/menu-detail.component';
import {HomeComponent} from './home/home.component';
import {OrderComponent} from './order/order.component';
import {OrderDoneComponent} from './order-done/order-done.component';
import {LoginComponent} from './login/login.component';
import {OrdersComponent} from './orders/orders.component';
import {LoginGuard} from './login.guard';
import {OrderDetailsComponent} from './order-details/order-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'menuEntries', component: MenuComponent },
  { path: 'order', component: OrderComponent },
  { path: 'detail/:id', component: MenuDetailComponent },
  { path: 'order-detail/:id', component: OrderDetailsComponent, canActivate: [LoginGuard] },
  { path: 'home', component: HomeComponent },
  { path: 'orderdone', component: OrderDoneComponent },
  { path: 'login', component: LoginComponent },
  { path: 'orders', component: OrdersComponent, canActivate: [LoginGuard] },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
