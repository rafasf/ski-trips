import {Component, Input, OnChanges, SimpleChanges} from '@angular/core'
import {Alliance} from './../alliance/alliance';
import {Origin} from './../origin/origin';
import {Schedule} from './../schedule/schedule';
import {Resort} from './resort';

@Component({
  selector: 'resort',
  template: `
    <li
      class="resort">
      <section>
         <a href="{{ resort.url }}">
          <h2 class="name">{{ resort.name }}</h2>
         </a>
         <p><small>Airport(s): {{ resort.airports }}</small></p>
      </section>
      <a
        [ngClass]="{'pure-button-disabled': !searchLink}"
        target="_blank"
        class="flight-link"
        href="{{ searchLink }}">See Flights</a>
    </li>`
})
export class ResortComponent implements OnChanges {
  @Input() resort: Resort;
  @Input() origin: Origin;
  @Input() schedule: Schedule;
  @Input() alliance: Alliance;

  searchLink: string;

  ngOnChanges(changes: SimpleChanges) {
    if (this.origin && this.schedule) {
      this.searchLink = this.searchLinkFor(
        this.origin,
        this.resort.airports,
        this.schedule,
        this.alliance);
    } else {
      this.searchLink = '';
    }
  }

  private searchLinkFor(
    origins: Origin,
    destinations: Array<string>,
    schedule: Schedule,
    alliance: Alliance
  ): string {
    const {departureDate, returnDate} = schedule;
    const selectedAlliance = alliance !== undefined ? [`a=${alliance.code}`] : [];

    const searchParams = [
      '#search',
      `f=${origins.airportCodes.join(',')}`,
      `t=${destinations}`,
      `d=${departureDate}`,
      `r=${returnDate}`,
      'mc=m']
      .concat(selectedAlliance)
      .join(';')

    return `https://www.google.com/flights/${searchParams}`
  }
}
