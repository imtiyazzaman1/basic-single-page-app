var Browser = require("zombie");
var server = require("../../server.js");

Browser.localhost('localhost', 8080);

describe('Clicking the button', function() {
  var browser;

  beforeEach(function(next) {
    browser = new Browser();

    browser.visit('/',function () {
      browser.clickLink('#button', function () {
        next();
      });
    });
  });

  it('reveals a list of name ', function() {
    expect(browser.text('#names')).toContain('Mary Lauren Isla Sam');
  });
});
