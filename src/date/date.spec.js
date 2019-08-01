const moment = require("moment");

const date1 = moment('2010-01-20');
const date2 = moment('2010-01-21');

test('should check that one date is after another', () => {
    expect(date2.isAfter(date1)).toBe(true);    
});

test('should compare year/month/day', () => {
    expect(date1.year()).toEqual(2010);
    expect(date1.month()).toEqual(0); // Month starts at 0, not 1
    expect(date1.date()).toEqual(20);
});