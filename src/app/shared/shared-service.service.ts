import { Injectable } from '@angular/core';
import { House } from './model/house.model';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor() { }

  setDataInSession(data: House) {
    sessionStorage.setItem('detail', JSON.stringify(data));
  }

  getDataFromSession(): House {
    return JSON.parse(sessionStorage.getItem('detail'));
  }
}
