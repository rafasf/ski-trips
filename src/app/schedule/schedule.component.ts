import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'schedule',
  template: `
    <section class="schedule">
      <label for="departure-date">Departure Date</label>
      <input
        type="date"
        name="departure-date"
        class="pure-input-1"
        (change)="changeDepartureDate($event)" />
      <label for="return-date">Return Date</label>
      <input
        type="date"
        name="return-date"
        class="pure-input-1"
        (change)="changeReturnDate($event)" />
    </section>`
})
export class ScheduleComponent {
  private departureDate: string;
  private returnDate: string;

  @Output() scheduleChanged = new EventEmitter<any>();

  changeDepartureDate(e) {
    this.departureDate = e.srcElement['value'];
    this.possibilyEmitChange(this.departureDate, this.returnDate);
  }

  changeReturnDate(e) {
    this.returnDate = e.srcElement['value'];
    this.possibilyEmitChange(this.departureDate, this.returnDate);
  }

  possibilyEmitChange(departureDate, returnDate) {
    if (this.departureDate && this.returnDate) {
      this.scheduleChanged.emit({
        departureDate: this.departureDate,
        returnDate: this.returnDate
      });
    }
  }
}
