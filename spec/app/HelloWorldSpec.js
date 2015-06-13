describe("helloWorld()", function() {
  var helloWorld = require("../../app/HelloWorld");
  it("it should return Hello World", function(){
    expect(helloWorld()).toEqual('Hello World');
  });
});