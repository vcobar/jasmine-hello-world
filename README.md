# Jasmine-Hello-World


## Create Project 
`mkdir project-folder`
`cd project-folder`


## Install Jasmine Module
--prefix installs node_module to a specific folder

`sudo npm install --prefix ./ jasmine`


## Initializing

To initialize a project for Jasmine

`jasmine init`


## Usage

To run your test suite

`jasmine`


# HelloWorld Example


## Basic Folder Structure

```
|-- app
--|-- HelloWorld.js
|-- spec
--|-- app
----|-- HelloWorldSpec.js
```


## Write Test first!
```
describe("helloWorld()", function() {
  var helloWorld = require("../../app/HelloWorld");
  it("it should return Hello World", function(){
    expect(helloWorld()).toEqual('Hello World');
  });
});
```

`jasmine`

Test Results:
```
Started
F

Failures:
1) helloWorld() it should return Hello World
  Message:
    TypeError: object is not a function
  Stack:
    TypeError: object is not a function
        at Object.<anonymous> (project-folder/spec/app/HelloWorldSpec.js:4:12)

1 spec, 1 failure
Finished in 0.017 seconds
```


## Pass The Test!

Add method to app/HelloWorld.js

```
var helloWorld = function(){
  return 'Hello World';
}
module.exports = helloWorld;
```

`jasmine`

```
Started
.


1 spec, 0 failures
Finished in 0.005 seconds
```
