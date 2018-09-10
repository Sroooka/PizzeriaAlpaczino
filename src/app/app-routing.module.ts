import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuComponent} from './menu/menu.component';

const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  // { path: '', redirectTo: 'project-list', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroes', component: HeroesComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
