var app = require('../dest/js/app.js');

describe("app", function() {
  it("It call saySome module", function() {
      var result;
      result = app.saySome('Vasya');
      console.log(result);
      expect(result).toEqual('Hello, Vasya!');
  });
});
