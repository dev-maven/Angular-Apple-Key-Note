import 'hammerjs';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxHmCarouselModule } from 'ngx-hm-carousel';

import { IconsModule } from '../../icons/_icons.module';

import { PebEditorCarouselComponent } from './carousel/peb-editor-carousel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PebEditorNumberInputComponent } from './number-input/number-input.component';
import { PebEditorSliderComponent } from './slider/slider.component';
import { PebEditorAnglePickerComponent } from './angle-picker/angle-picker.component';



const components = [
  PebEditorAnglePickerComponent,
  PebEditorCarouselComponent,
  PebEditorNumberInputComponent,
  PebEditorSliderComponent
];

@NgModule({
  declarations: components,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgxHmCarouselModule,
    IconsModule,
  ],
  exports: components,
})
export class SidebarSharedModule { }
