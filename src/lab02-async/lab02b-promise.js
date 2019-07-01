
module.exports = {
   promise01: function(name) {
      return new Promise(function(resolve, reject) {
         
         resolve("hello " +name);
      });
   },

   promise02: function(name) {
      return myPromise = new Promise((resolve, reject) => {
         setTimeout(() => resolve("hello " + name), 1000)
       })
   },

   async01: async function(name) {
      return "hello " + name;
   }
}