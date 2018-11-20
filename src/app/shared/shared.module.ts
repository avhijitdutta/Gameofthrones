import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedServiceService } from './shared-service.service';
import { NavHeaderComponent } from './nav-header/nav-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavHeaderComponent],
  providers: [
    SharedServiceService
  ],
  exports: [
    NavHeaderComponent
  ]
})
export class SharedModule { }
