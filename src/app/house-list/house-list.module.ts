import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { Routes, RouterModule } from '@angular/router';
import { ListService } from './list.service';
import { HttpClientModule } from '@angular/common/http';
import {JsonpModule} from '@angular/http';
import { SharedModule} from '../shared/shared.module';
const routes: Routes = [
  { path: '', component: ListComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    JsonpModule,
    SharedModule
  ],
  declarations: [ListComponent],
  providers: [
    ListService
  ]
})
export class HouseListModule { }
