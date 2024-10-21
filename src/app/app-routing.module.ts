import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './modules/layout/layout.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule) },
    ]

  },

  // Geçersiz rotalarda forbidden sayfasına yönlendirme
  { path: '**', redirectTo: '/forbidden' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
