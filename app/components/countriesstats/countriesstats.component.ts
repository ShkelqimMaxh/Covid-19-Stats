import { Component, OnInit } from '@angular/core';
import {StatsService} from '../../services/stats.service';

@Component({
  selector: 'app-countriesstats',
  templateUrl: './countriesstats.component.html',
  styleUrls: ['./countriesstats.component.css']
})
export class CountriesstatsComponent implements OnInit {
  searchCountry: string;
  Countries: any;

  constructor(private statsService: StatsService) { }

  ngOnInit(): void {
    this.statsService.getCountriesStats().subscribe(data => {
      this.Countries = data;
      console.log(this.Countries);
    });
  }

}
