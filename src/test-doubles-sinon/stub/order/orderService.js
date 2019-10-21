const emailService = require("./emailService");

function processOrder() {
    // confirm item availability
    // make payment
    const emailReport = emailService.sendEmail();
    return {
        orderId: "123456",
        status: emailReport.status
    };
}
module.exports = {processOrder};