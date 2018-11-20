import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private heroesUrl = 'https://anapioficeandfire.com/api/houses';  // URL to web api

  constructor(private httpClient: HttpClient) {

  }

  getHouseList(): Observable <any> {
    return this.httpClient.get(this.heroesUrl);
  }
}
