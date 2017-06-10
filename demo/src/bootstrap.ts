import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterModule, Routes } from '@angular/router';
import { SidebarModule } from 'ng-sidebar';

import { DemoComponent } from './demo/demo.component';
import { OtherComponent } from './demo/other.component';
import { MainComponent } from './demo/main.component';

import './styles/styles.scss';

enableProdMode();

const appRoutes: Routes = [
  { path: 'pageB', component: OtherComponent },
  { path: '', component: DemoComponent }
];

@NgModule({
  declarations: [MainComponent, DemoComponent, OtherComponent],
  imports: [RouterModule.forRoot(appRoutes), BrowserModule, SidebarModule.forRoot()],
  bootstrap: [MainComponent],
})
class DemoAppModule {}

platformBrowserDynamic().bootstrapModule(DemoAppModule);
