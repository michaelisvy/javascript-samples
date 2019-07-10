module.exports = class Greeting {
   constructor(firstName) {
      this.firstName = firstName;
      this.uninitialisedAttribute = 0;
   }
   getGreetingMessage() {
      return "hello " + this.firstName;
   }
}