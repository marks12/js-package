exports.run = function() {

    var $ = require('jquery')(window);

    $ = window.$;
    window.availableTimes = undefined;

    return (function() {
        console.log('Library body');
        return {
          test: true
        };

    }());
}
