import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { Router} from '@angular/router';
import { SharedServiceService } from '../../shared/shared-service.service';
import { House } from '../../shared/model/house.model';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public listService: ListService, private router: Router, private sharedServiceService: SharedServiceService) { }
  houseList: House[] = [];
  title: String = 'Houses List';
  ngOnInit() {
    this.listService.getHouseList().subscribe(success => {
      console.log(success);
      this.houseList = success;
    }, error => {
      console.log(error);
    });
  }

  detail(value) {
    this.sharedServiceService.setDataInSession(value);
    this.router.navigate(['houseDetail']);
  }

}
