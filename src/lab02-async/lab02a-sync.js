
module.exports = {
   callGreeting: function(name) {
      return greeting(name);
   }
}

function greeting(name) {
   return "hello " + name;
}