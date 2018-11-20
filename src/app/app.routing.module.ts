import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'houseList', pathMatch: 'full' },
  { path: 'houseDetail', loadChildren: './house-detail/house-detail.module#HouseDetailModule' },
  { path: 'houseList', loadChildren: './house-list/house-list.module#HouseListModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
