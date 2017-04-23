export class Resort {
  readonly name: string;
  readonly url: string;
  readonly airports: Array<string>;

  private constructor(name: string, url: string, airports: Array<string>) {
    this.name = name;
    this.url = url;
    this.airports = airports;
  }

  static from(name: string, url: string, airports: Array<string>) {
    return new Resort(name, url, airports);
  }
}
