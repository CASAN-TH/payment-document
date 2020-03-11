import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { RouterModule } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FuseSharedModule } from '@fuse/shared.module';
import { MatIconModule } from '@angular/material';

const routes = [
  {
      path     : '**',
      component: FormComponent,
      // canActivate: [AuthenGuardService]
  }
];
@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,

    FuseSharedModule
  ]
})
export class FormModule { }
