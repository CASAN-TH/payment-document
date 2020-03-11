import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';


const routes = [
    {
        path     : '**',
        component: ListComponent,
        
    }
];

@NgModule({
  declarations: [ListComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatButtonModule
  ]
})
export class ListModule { }
