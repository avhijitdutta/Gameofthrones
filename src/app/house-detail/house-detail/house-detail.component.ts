import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../../shared/shared-service.service';
import { House } from '../../shared/model/house.model';
@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {
  detail: House;
  title: String = 'House Detail';
  constructor(private sharedServiceService: SharedServiceService) {
    this.detail = this.sharedServiceService.getDataFromSession();
  }

  ngOnInit() {
  }

}
