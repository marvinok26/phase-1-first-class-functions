function receivesAFunction(callback) {
    callback();
  }
  

  module.exports = {
    receivesAFunction,
  };

  function returnsANamedFunction() {
    return function namedFunction() {
    };
  }
  
  module.exports = {
    returnsANamedFunction,
  };

  function returnsAnAnonymousFunction() {
    return function() {
    };
  }

  module.exports = {
    returnsAnAnonymousFunction,
  };