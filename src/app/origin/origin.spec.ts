import {Origin} from './origin';

describe('Origin', () => {
  it('creates itself from a string of codes', () => {
    expect(Origin.from('lga, jfk,hpn').airportCodes)
      .toEqual(['LGA', 'JFK', 'HPN']);
  });
});
