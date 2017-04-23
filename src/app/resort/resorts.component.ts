import {Component, Input} from '@angular/core';
import {ResortComponent} from './resort.component';
import {Alliance} from './../alliance/alliance';
import {Origin} from './../origin/origin';
import {Schedule} from './../schedule/schedule';
import {Resort} from './resort';

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
  @Input() origin: Origin;
  @Input() schedule: Schedule;
  @Input() alliance: Alliance;

  resorts: Array<Resort>;

  constructor() {
    const resorts = [
      Resort.from(
        "Snowbird",
        "http://www.snowbird.com",
        ["SLC"]),
      Resort.from(
        "Alta",
        "http://www.alta.com",
        ["SLC"]),
      Resort.from(
        "Aspen Snowmass",
        "https://www.aspensnowmass.com",
        ["ASE"]),
      Resort.from(
        "Jackson Hole",
        "http://www.jacksonhole.com",
        ["JAC"]),
      Resort.from(
        "Mammoth",
        "http://www.mammothmountain.com",
        ["MMH"]),
      Resort.from(
        "Revelstroke",
        "http://www.revelstokemountainresort.com",
        ["YRV",
          "YLW"]),
      Resort.from(
        "Banff",
        "https://www.skibig3.com",
        ["YYC"]),
      Resort.from(
        "Coronet Peak",
        "https://www.nzski.com",
        ["ZQN"]),
      Resort.from(
        "Squaw Alpine",
        "http://squawalpine.com",
        ["RNO"]),
      Resort.from(
        "Sun Valley",
        "https://www.sunvalley.com",
        ["SUN"]),
      Resort.from(
        "Taos",
        "http://www.skitaos.com",
        ["SKX", "SAF", "ABQ"]),
      Resort.from(
        "Telluride",
        "http://www.tellurideskiresort.com",
        ["TEX", "MTJ", "GJT", "DRO"]),
      Resort.from(
        "Stowe",
        "https://www.stowe.com",
        ["BTV"]),
      Resort.from(
        "Thredbo",
        "https://www.thredbo.com.au",
        ["COM", "SCB"]),
      Resort.from(
        "Whistler Blackcomb",
        "https://www.whistlerblackcomb.com",
        ["YVR"])
    ];

    const allAirports = resorts
      .reduce((airports, current) => airports.concat(current.airports), []);

    this.resorts = resorts.concat(
      Resort.from(
        'All Locations',
        '',
        Array.from(new Set(allAirports)))
    );
  }
}
