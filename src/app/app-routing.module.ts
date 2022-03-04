import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { V1AppModule } from '../../projects/v1/src/app/app.module';
import { V2AppModule } from '../../projects/v2/src/app/app.module';

const routes: Routes = [
  {
    path: 'v1',
    loadChildren: () => import('../../projects/v1/src/app/app.module').then(m => m.V1AppModule)
  },
  {
    path: 'v2',
    loadChildren: () => import('../../projects/v2/src/app/app.module').then(m => m.V2AppModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    V1AppModule.forRoot(),
    V2AppModule.forRoot(),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
