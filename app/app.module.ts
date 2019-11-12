import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PortalModule } from '@angular/cdk/portal';

import { AppComponent } from './app.component';
import { AppSubModule } from './sub/app.sub.module';
import { MapTwoComponent } from './maptwo.component';
import { WindowComponent } from './window.component';


@NgModule({
  imports: [BrowserModule, PortalModule, AppSubModule],
  declarations: [AppComponent, MapTwoComponent, WindowComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
