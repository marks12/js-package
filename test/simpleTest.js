
var AbstractBrowser = require('mock-browser').delegates.AbstractBrowser;
var MockBrowser = require('mock-browser').mocks.MockBrowser;
// configure in some factory
var opts = {};

if (typeof window === 'object') {
  // assign the browser window if it exists
  opts.window = window;
} else {
  // create a mock window object for testing
  opts.window =  MockBrowser.createWindow();
  window = opts.window;
}

var $ = require('jquery');
var should = require('should');
var Library = require('../app/Library/Library');

describe('example test', function() {

    it('Check requiring should module', function() {
        true.should.equal(true);
    });

    it('Check requiring order module', function() {

        var checkLibrary = Library.run().test;

        checkLibrary.should.equal(true);
    });

});
