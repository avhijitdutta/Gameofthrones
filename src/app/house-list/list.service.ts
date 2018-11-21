import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ListService {
  private heroesUrl = environment.baseUrl + 'houses';  // URL to web api

  constructor(private httpClient: HttpClient) {

  }

  getHouseList(): Observable <any> {
    return this.httpClient.get(this.heroesUrl);
  }
}
