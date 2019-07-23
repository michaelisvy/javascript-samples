let Person = require("./person");
module.exports = class Greeting {
   constructor(name) {
      this.person = new Person(name);
   }

  greet() {
   return ("hello " + this.person.firstName);
  }
}
