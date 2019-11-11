import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PortalModule } from '@angular/cdk/portal';

import { AppComponent } from './app.component';
import { WindowComponent } from './window.component';
import { MapOneComponent } from './mapone.component';
import { MapTwoComponent } from './maptwo.component';
import { TimeLineComponent } from './Timeline.component';

@NgModule({
  imports: [BrowserModule, PortalModule],
  declarations: [AppComponent, WindowComponent, MapOneComponent, MapTwoComponent, TimeLineComponent,],
  bootstrap: [AppComponent]
})
export class AppModule { }
