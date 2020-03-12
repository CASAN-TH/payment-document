import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { RouterModule } from '@angular/router';
import { FuseSharedModule } from '@fuse/shared.module';
import {MatButtonModule} from '@angular/material/button';

const routes = [
  {
      path     : '**',
      component: ListComponent,
      // canActivate: [AuthenGuardService]
  }
];

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FuseSharedModule,
    MatButtonModule
  ]
})
export class ListModule { }
