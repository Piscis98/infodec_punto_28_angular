import { Route } from '../../models/route';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  public rotes:Route[]=[{path:'home', children:''}];

  constructor() { }


}
