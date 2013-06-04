SET REPORTER=dot

.\node_modules\.bin\mocha.cmd --require ./test/common --reporter %REPORTER% --growl test/expect.js
