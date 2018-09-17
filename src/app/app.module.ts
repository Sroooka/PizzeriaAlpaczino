import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './CustomerView/menu/menu.component';
import { MenuDetailComponent } from './CustomerView/menu-detail/menu-detail.component';
import { HomeComponent } from './CustomerView/home/home.component';
import { CartComponent } from './CustomerView/cart/cart.component';
import { OrderComponent } from './CustomerView/order/order.component';
import {NgModel, ReactiveFormsModule} from '@angular/forms';
import { OrderDoneComponent } from './CustomerView/order-done/order-done.component';
import { LoginComponent } from './CustomerView/login/login.component';
import { OrdersComponent } from './AdminView/orders/orders.component';
import { OrderDetailsComponent } from './AdminView/order-details/order-details.component';
import { MenuSettingsComponent } from './AdminView/menu-settings/menu-settings.component';
import { MenuSettingsDetailsComponent } from './AdminView/menu-settings-details/menu-settings-details.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuDetailComponent,
    HomeComponent,
    CartComponent,
    OrderComponent,
    OrderDoneComponent,
    LoginComponent,
    OrdersComponent,
    OrderDetailsComponent,
    MenuSettingsComponent,
    MenuSettingsDetailsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ReactiveFormsModule
  ],
  providers: [NgModel],

  bootstrap: [AppComponent]
})
export class AppModule { }
