function HelloWorld(){
    this.helloWorld = function(name){
      if (name) {
        if (name === 42) {
          return 'Welcome to the Twilight Zone';
        }
        return 'Hello '+name+'!';
      } else {
        return 'Hello World!';
      }
    };

}

module.exports = HelloWorld;
