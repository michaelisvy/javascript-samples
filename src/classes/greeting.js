
module.exports = class Greeting {
   constructor(person) {
      this.person = person;
   }

  greet() {
   return ("hello " + this.person.firstName);
  }
}
