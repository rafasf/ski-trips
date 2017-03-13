import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'schedule',
  template: `
    <section class="schedule">
      <div class="pure-control-group">
        <label for="departure-date">Departure Date:</label>
        <input type="date" name="departure-date" (change)="changeDepartureDate($event)" />
      </div>
      <div class="pure-control-group">
        <label for="return-date">Return Date:</label>
        <input type="date" name="return-date" (change)="changeReturnDate($event)" />
      </div>
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
