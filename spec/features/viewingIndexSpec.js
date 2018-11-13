var Browser = require("zombie");
var server = require("../../server.js");

Browser.localhost('localhost', 8080);

describe('viewing index', function() {
  var browser;

  beforeEach(function(next) {
    browser = new Browser();

    browser.visit('/',function () {
      next();
    });
  });

  it('displays the text "Push the button!"', function() {
    expect(browser.text('h1')).toEqual("Push the button!");
  });
});
