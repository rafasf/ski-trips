import {Schedule} from './schedule';

describe('Schedule', () => {
  it('creates itself from two dates', () => {
    const schedule = Schedule.from('2016-03-03', '2016-04-04');
    expect(schedule.departureDate).toEqual('2016-03-03');
    expect(schedule.returnDate).toEqual('2016-04-04');
  });
});
