import {Component, Input, OnChanges, SimpleChanges} from '@angular/core'

@Component({
  selector: 'resort',
  template: `
    <li
      class="resort">
      <h2>{{ resort.name }}</h2>
      <a href="{{ resort.url }}"><small>{{ resort.url }}</small></a>
      <p>Airport(s): {{ resort.airports }}</p>
      <a
        class="pure-button pure-button-primary flight-link"
        *ngIf="searchLink"
        href="{{ searchLink }}">Check Available Flights</a>
    </li>`
})
export class ResortComponent implements OnChanges {
  @Input() resort: any;
  @Input() origin: any;
  @Input() schedule: any;

  searchLink: string;

  ngOnChanges(changes: SimpleChanges) {
    if (this.origin && this.schedule) {
      this.searchLink = this.searchLinkFor(
        this.origin,
        this.resort.airports,
        this.schedule);
    } else {
      this.searchLink = '';
    }
  }

  private searchLinkFor(origins: any, destinations: any, schedule: any): string {
    const {departureDate, returnDate} = schedule;
    const searchParams = [
      '#search',
      `f=${origins}`,
      `t=${destinations}`,
      `d=${departureDate}`,
      `r=${returnDate}`,
      `a=STAR_ALLIANCE`,
      'mc=m'
    ].join(';')
    return `https://www.google.com/flights/${searchParams}`
  }
}
