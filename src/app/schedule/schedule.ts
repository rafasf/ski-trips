export class Schedule {
  private _departureDate: string;
  private _returnDate: string;

  private constructor(departureDate, returnDate) {
    this._departureDate = departureDate;
    this._returnDate = returnDate;
  }

  departureDate(): string {
    return this._departureDate;
  }

  returnDate(): string {
    return this._returnDate;
  }

  static from(departureDate: string, returnDate: string): Schedule {
    return new Schedule(departureDate, returnDate);
  }
}
