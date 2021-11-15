import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BodyComponent } from './body.component';
import { BodyOneComponent } from './bodyOne/bodyOne.component';
import { BodyTwoComponent } from './BodyTwo/bodyTwo.component';

import { BodyRoute } from '@app/body/body.routing';

// Service
import { ApiService } from '@service';

import { AppPipeModule } from '../../pipe/AppPipe.module';


@NgModule({
  declarations: [
    BodyComponent,
    BodyOneComponent,
    BodyTwoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BodyRoute,
    AppPipeModule
  ],
  // exports: [IndexAppPipe],
  providers: [ApiService]
})
export class BodyModule { }
