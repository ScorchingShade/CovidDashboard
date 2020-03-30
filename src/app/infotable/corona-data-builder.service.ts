import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoronaDataBuilderService {

  constructor(private _http: HttpClient) { }

  coronaData(){
    
    return this._http.get("https://corona.lmao.ninja/countries").pipe(map(result => result));
    
  }
}
