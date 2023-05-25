import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DetailComponent } from './main/detail/detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/paises', pathMatch: 'full' },
  { path: 'paises', component: MainComponent },
  { path: 'detail/:id', component: DetailComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
