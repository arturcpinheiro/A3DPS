import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    children: [{
      path: '',
      loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
    },
   ]
  },
  {
    path: 'manager-page',
    loadChildren: () => import('./manager-page/manager-page.module').then(m => m.ManagerPagePageModule)
  },
  {
    path: 'restock',
    loadChildren: () => import('./restock/restock.module').then( m => m.RestockPageModule)
  },
  {
    path: 'history',
    
    children: [{
      path: '',
      loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule)
    },{
      path: ':itemId',
      loadChildren: () => import('./history-detail/history-detail.module').then( m => m.HistoryDetailPageModule)
    }
   ]
  },
  {
    path: 'add-item',
    loadChildren: () => import('./add-item/add-item.module').then( m => m.AddItemPageModule)
  },
  {
    path: 'history-detail',
    loadChildren: () => import('./history-detail/history-detail.module').then( m => m.HistoryDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
