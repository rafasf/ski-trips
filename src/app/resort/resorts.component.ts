import {Component, Input} from '@angular/core';
import {ResortComponent} from './resort.component';
import {Alliance} from './../alliance/alliance';

@Component({
  selector: 'resorts',
  template: `
  <ul class="resorts">
    <resort
      *ngFor="let resort of resorts"
      [resort]="resort"
      [origin]="origin"
      [schedule]="schedule"
      [alliance]="alliance">
      </resort>
  </ul>`
})
export class ResortsComponent {
  @Input() origin: any;
  @Input() schedule: any;
  @Input() alliance: Alliance;

  resorts: Array<any>;

  constructor() {
    const resorts = [
      {
        "name": "Snowbird",
        "url": "http://www.snowbird.com",
        "airports": ["SLC"]
      },
      {
        "name": "Alta",
        "url": "http://www.alta.com",
        "airports": ["SLC"]
      },
      {
        "name": "Aspen Snowmass",
        "url": "https://www.aspensnowmass.com",
        "airports": ["ASE"]
      },
      {
        "name": "Jackson Hole",
        "url": "http://www.jacksonhole.com",
        "airports": ["JAC"]
      },
      {
        "name": "Mammoth",
        "url": "http://www.mammothmountain.com",
        "airports": ["MMH"]
      },
      {
        "name": "Revelstroke",
        "url": "http://www.revelstokemountainresort.com",
        "airports": ["YRV", "YLW"]
      },
      {
        "name": "Banff",
        "url": "https://www.skibig3.com",
        "airports": ["YYC"]
      },
      {
        "name": "Coronet Peak",
        "url": "https://www.nzski.com",
        "airports": ["ZQN"]
      },
      {
        "name": "Squaw Alpine",
        "url": "http://squawalpine.com",
        "airports": ["RNO"]
      },
      {
        "name": "Sun Valley",
        "url": "https://www.sunvalley.com",
        "airports": ["SUN"]
      },
      {
        "name": "Taos",
        "url": "http://www.skitaos.com",
        "airports": ["SKX", "SAF", "ABQ"]
      },
      {
        "name": "Telluride",
        "url": "http://www.tellurideskiresort.com",
        "airports": ["TEX", "MTJ", "GJT", "DRO"]
      },
      {
        "name": "Stowe",
        "url": "https://www.stowe.com",
        "airports": ["BTV"]
      },
      {
        "name": "Thredbo",
        "url": "https://www.thredbo.com.au",
        "airports": ["COM", "SCB"]
      },
      {
        "name": "Whistler Blackcomb",
        "url": "https://www.whistlerblackcomb.com",
        "airports": ["YVR"]
      }
    ];

    const allAirports = resorts
      .reduce((airports, current) => airports.concat(current['airports']), []);

    this.resorts = resorts.concat({
      name: 'All Locations',
      url: '',
      airports: Array.from(new Set(allAirports))
    });
  }
}
