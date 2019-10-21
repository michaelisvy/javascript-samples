function sendEmail(receiverAddress, emailContent) {
    console.log("email sent");
    return {
        content: emailContent,
        to: receiverAddress,
        status: "sent"
    };
}

module.exports = { sendEmail };