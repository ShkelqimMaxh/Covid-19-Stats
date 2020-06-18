import { Component, OnInit } from '@angular/core';
import {StatsService} from '../../services/stats.service';

@Component({
  selector: 'app-mainstats',
  templateUrl: './mainstats.component.html',
  styleUrls: ['./mainstats.component.css']
})
export class MainstatsComponent implements OnInit {
  WorldStats: any;
  WorldTotalCases: string;
  WorldTotalRecovered: string;
  WorldTotalDeaths: string;

  constructor(private statsService: StatsService) { }

  ngOnInit(): void {
  this.statsService.getAllWorldStats().subscribe(data => {
    this.WorldStats = data;
    this.WorldTotalCases = Number(this.WorldStats.cases).toLocaleString();
    this.WorldTotalRecovered = Number(this.WorldStats.recovered).toLocaleString();
    this.WorldTotalDeaths = Number(this.WorldStats.deaths).toLocaleString();
  });
  }
}
