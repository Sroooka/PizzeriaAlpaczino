import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuComponent} from './CustomerView/menu/menu.component';
import {MenuDetailComponent} from './CustomerView/menu-detail/menu-detail.component';
import {HomeComponent} from './CustomerView/home/home.component';
import {OrderComponent} from './CustomerView/order/order.component';
import {OrderDoneComponent} from './CustomerView/order-done/order-done.component';
import {LoginComponent} from './CustomerView/login/login.component';
import {OrdersComponent} from './AdminView/orders/orders.component';
import {LoginGuard} from './Guard/login.guard';
import {OrderDetailsComponent} from './AdminView/order-details/order-details.component';
import {MenuSettingsComponent} from './AdminView/menu-settings/menu-settings.component';
import {MenuSettingsDetailsComponent} from './AdminView/menu-settings-details/menu-settings-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'menuEntries', component: MenuComponent },
  { path: 'menuSettings', component: MenuSettingsComponent, canActivate: [LoginGuard] },
  { path: 'admindetail/:id', component: MenuSettingsDetailsComponent, canActivate: [LoginGuard] },
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
