import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { V2ViewComponent } from './component/v2-view/v2-view.component';

const routes: Routes = [
  { path: 'v2', redirectTo: 'v2/view' },
  { path: 'v2/view', component: V2ViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
