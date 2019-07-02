var sinon = require("sinon");
var moment = require("moment");
var clock;


test('should change the time to Valentine day and then restore it', () => {
    let todayMoment = moment().format("MM-DD");
    let clock = sinon.useFakeTimers(new Date("2019-02-14"));
    expect(moment().format("MM-DD")).toBe("02-14");
    clock.restore();
    expect(moment().format("MM-DD")).toBe(todayMoment);
    
});