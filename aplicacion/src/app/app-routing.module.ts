import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { HeroesComponent } from './heroes/heroes.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import ('src/app/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'about',
    loadChildren: () => import ('src/app/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
