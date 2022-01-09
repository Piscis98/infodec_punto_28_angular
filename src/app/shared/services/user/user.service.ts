import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public getAllUsers(){
    return this.http.get('../../assets/data/MOCK_DATA.json');
  }

}
