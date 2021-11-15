import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BodyComponent } from '@app/body/body.component';
import { BodyOneComponent } from '@app/body/bodyOne/bodyOne.component';
import { BodyTwoComponent } from '@app/body/BodyTwo/bodyTwo.component';

const routes: Routes = [
  {
    path: '',
    component: BodyComponent,
    children: [
      { path: 'body1', component: BodyOneComponent },
      { path: 'body2', component: BodyTwoComponent },
      { path: '', redirectTo: 'body1', pathMatch: 'full' },
      { path: '**', redirectTo: 'body1', pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class BodyRoute { }