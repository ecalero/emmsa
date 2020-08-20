import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

/* const routes: Routes = [
  {
    path: '',
    component: HomePage,
  }
];
 */

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
      },
      {
        path: 'noticia',
        loadChildren: () => import('../pagina/noticia/noticia.module').then( m => m.NoticiaPageModule)
      },
      {
        path: 'precio',
        loadChildren: () => import('../pagina/precio/precio.module').then( m => m.PrecioPageModule)
      },
      {
        path: 'inicio',
        loadChildren: () => import('../pagina/inicio/inicio.module').then( m => m.InicioPageModule)
      },
      {
        path: 'ahorro',
        loadChildren: () => import('../pagina/ahorro/ahorro.module').then( m => m.AhorroPageModule)
      },
      {
        path: 'temporada',
        loadChildren: () => import('../pagina/temporada/temporada.module').then( m => m.TemporadaPageModule)
      }
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
