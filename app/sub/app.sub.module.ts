import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapOneComponent } from '../mapone.component';
import { MapThreeComponent } from '../mapthree.component';



@NgModule({
  declarations: [MapOneComponent, MapThreeComponent],
  imports: [
    CommonModule
  ],
  exports: [MapOneComponent, MapThreeComponent],
})
export class AppSubModule { }
