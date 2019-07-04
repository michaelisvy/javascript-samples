var moment = require("moment");

test('should display current time', () => {
    let date1 = moment('2010-01-20');
    let date2 = moment('2010-01-21');
    expect(date2.isAfter(date1)).toBe(true);
    
});