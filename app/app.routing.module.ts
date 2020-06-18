import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { CountriesstatsComponent} from './components/countriesstats/countriesstats.component';
import { MainstatsComponent} from './components/mainstats/mainstats.component';
import { NotfoundComponent} from './components/notfound/notfound.component';
import { SinglecountryComponent} from './components/singlecountry/singlecountry.component';

const routes: Routes = [
  {path:  '', component: MainstatsComponent},
  {path:  'countries', component: CountriesstatsComponent},
  {path:  'kosova', component: SinglecountryComponent},
  {path:  '**', component: NotfoundComponent}
];

@NgModule({
  exports: [RouterModule],
  providers: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
})
export class AppRoutingModule { }
