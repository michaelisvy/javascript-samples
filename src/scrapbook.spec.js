test('should use a promise', async () => {
    timeout(5000).then(function() {
        throw 'worky!';
        // return Promise.reject('worky'); also works
      }).catch(function(e) {
        console.log(e); // 'worky!'
      });
});


function timeout(duration) { // Thanks joews
    return new Promise(function(resolve) {
      setTimeout(resolve, duration);
    });
  }

