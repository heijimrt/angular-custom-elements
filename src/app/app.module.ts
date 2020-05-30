import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { BoilerplateComponent } from './boilerplate/boilerplate.component';

@NgModule({
  declarations: [
    AppComponent,
    BoilerplateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
})
export class AppModule {
  constructor(private injector: Injector) {
    const custom = createCustomElement(BoilerplateComponent, { injector });
    customElements.define('boilerplate-selector', custom);
  }
  ngDoBootstrap() {}
}
