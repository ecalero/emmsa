import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'noticia',
    loadChildren: () => import('./pagina/noticia/noticia.module').then( m => m.NoticiaPageModule)
  },
  {
    path: 'precio',
    loadChildren: () => import('./pagina/precio/precio.module').then( m => m.PrecioPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pagina/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'ahorro',
    loadChildren: () => import('./pagina/ahorro/ahorro.module').then( m => m.AhorroPageModule)
  },
  {
    path: 'temporada',
    loadChildren: () => import('./pagina/temporada/temporada.module').then( m => m.TemporadaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
