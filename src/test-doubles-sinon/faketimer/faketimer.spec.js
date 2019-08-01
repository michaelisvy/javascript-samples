const sinon = require("sinon");
const moment = require("moment");

test('should change the time to Valentine day and then restore it', () => {
    const todayMoment = moment().format("MM-DD");
    const clock = sinon.useFakeTimers(new Date("2019-02-14"));
    expect(moment().format("MM-DD")).toBe("02-14");
    clock.restore();
    expect(moment().format("MM-DD")).toBe(todayMoment); 
});