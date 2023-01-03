import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'Home',
    component: HomeComponent,
    data: { preload: true }
  },
  {
    path: 'detail',
    loadChildren: () => import('./details/details.module').then(m => m.DetailsModule)
  },
  {
    path: 'add',
    component: AddComponent,
    data: { preload: true }
  },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
