import {Component, Input, OnChanges, SimpleChanges} from '@angular/core'
import {Alliance} from './../alliance/alliance';
import {Origin} from './../origin/origin';

@Component({
  selector: 'resort',
  template: `
    <li
      class="resort">
      <section>
         <h2>{{ resort.name }}</h2>
         <a href="{{ resort.url }}"><small>{{ resort.url }}</small></a>
         <p>Airport(s): {{ resort.airports }}</p>
      </section>
      <a
        [ngClass]="{'pure-button-disabled': !searchLink}"
        target="_blank"
        class="pure-button pure-button-primary flight-link"
        href="{{ searchLink }}">See Flights</a>
    </li>`
})
export class ResortComponent implements OnChanges {
  @Input() resort: any;
  @Input() origin: Origin;
  @Input() schedule: any;
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
    destinations: any,
    schedule: any,
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
