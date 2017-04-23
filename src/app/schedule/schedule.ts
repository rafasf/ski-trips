export class Schedule {
  readonly departureDate: string;
  readonly returnDate: string;

  private constructor(departureDate, returnDate) {
    this.departureDate = departureDate;
    this.returnDate = returnDate;
  }

  static from(departureDate: string, returnDate: string): Schedule {
    return new Schedule(departureDate, returnDate);
  }
}
