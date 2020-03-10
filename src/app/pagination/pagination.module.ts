import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { PaginationService } from './pagination.service';



@NgModule({
  declarations: [PaginationComponent],
  imports: [
    CommonModule
  ],
  providers:[
    PaginationService
  ],
  exports:[
    PaginationComponent
  ]
})
export class PaginationModule { }
