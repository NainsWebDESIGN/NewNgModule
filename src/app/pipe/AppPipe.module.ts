import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppPipe } from '@pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AppPipe
  ],
  exports: [
    AppPipe
  ]
})
export class AppPipeModule { }
