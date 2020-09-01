import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SpaceserService {

  constructor(private httpClient:HttpClient) { }

  public getSpace(){
    let dataURL='https://api.spaceXdata.com/v3/launches?limit=100'
    return this.httpClient.get(dataURL)

  }
}
