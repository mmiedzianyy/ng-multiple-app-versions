import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { V1ViewComponent } from './component/v1-view/v1-view.component';

const routes: Routes = [
  { path: 'v1', redirectTo: 'v1/view' },
  { path: 'v1/view', component: V1ViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
