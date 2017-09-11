
/**

Install

sudo npm install -g watchify
sudo npm install -g browserify


  For debug and minifcation use follow commands:

1. Debug - npm run watch
2. Build - npm run build

*/

// Parse the URL of the current location
var url = require('url');
var parts = url.parse(window.location.href);

var App = function (run_function) {

    if (window.addEventListener)
        window.addEventListener("load", run_function, false);
    else if (window.attachEvent) {
        window.attachEvent("onload", run_function);
    } else {
        window.onload = run_function;
    }
};

if(parts && parts.pathname) {
    switch (true) {

        case /some-route\.html/.test(parts.pathname):
            break;

        default:
            console.log('default router');
            var Library = require('./app/Library/Library.js');
            App(Library.run);
            break;

    }
}
