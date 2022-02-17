import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { V2ViewComponent } from './component/v2-view/v2-view.component';

const providers: Provider[] = [];

@NgModule({
  declarations: [
    AppComponent,
    V2ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers,
  bootstrap: [AppComponent]
})
export class AppModule { }

@NgModule({})
export class V2AppModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: AppModule,
      providers,
    }
  }
}
