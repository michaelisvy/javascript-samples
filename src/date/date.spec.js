const moment = require("moment");

test('should display current time', () => {
    const date1 = moment('2010-01-20');
    const date2 = moment('2010-01-21');
    expect(date2.isAfter(date1)).toBe(true);    
});