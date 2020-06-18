import { Injectable } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  constructor(private http: HttpClient, private route: Router) { }


  getAllWorldStats() {
    return this.http.get('https://coronavirus-19-api.herokuapp.com/all');
  }
  getCountriesStats(){
    return this.http.get('https://coronavirus-19-api.herokuapp.com/countries');
  }
  getSingleCountryStats(country: string){
    return this.http.get('https://coronavirus-19-api.herokuapp.com/countries' + country);
  }
}
