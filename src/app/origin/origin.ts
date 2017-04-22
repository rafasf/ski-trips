export class Origin {
  private _airportCodes: Array<string>;

  private constructor(codes: Array<string>) {
    this._airportCodes = codes;
  }

  get airportCodes() {
    return this._airportCodes;
  }

  static from(codes: string) {
    return new Origin(codes
      .toUpperCase()
      .replace(/\s/, '')
      .split(','));
  }
}
