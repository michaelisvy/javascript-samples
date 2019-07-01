
class Greeting {
   setFirstName(firstName) {
      this.firstName = firstName;
   }
   getGreetingMessage() {
      return "hello " + this.firstName;
   }
}

module.exports = new Greeting();
