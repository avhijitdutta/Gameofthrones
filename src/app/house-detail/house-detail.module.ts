import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseDetailComponent } from './house-detail/house-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', component: HouseDetailComponent },
];


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HouseDetailComponent]
})
export class HouseDetailModule { }
