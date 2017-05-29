import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'schedule',
  template: `
    <section class="schedule">
      <label for="departure-date">When are you leaving?</label>
      <input
        type="date"
        name="departure-date"
        class="pure-input-1"
        (change)="changeDepartureDate($event.target.value)" />
      <label for="return-date">When are you returning?</label>
      <input
        type="date"
        name="return-date"
        class="pure-input-1"
        (change)="changeReturnDate($event.target.value)" />
    </section>`
})
export class ScheduleComponent {
  private departureDate: string;
  private returnDate: string;

  @Output() scheduleChanged = new EventEmitter<any>();

  changeDepartureDate(newDate) {
    this.departureDate = newDate;
    this.possibilyEmitChange(this.departureDate, this.returnDate);
  }

  changeReturnDate(newDate) {
    this.returnDate = newDate;
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
