var fs = require('fs');

var index_html = __dirname + '/../www/index.html';

console.log("Injecting cordova.js and cordova_plugins.js to index.html ...");

fs.readFile( index_html, 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }
    var result = data.replace(/<!-- do not remove - placeholder cordova.js -->/g, '<script type="text/javascript" src="cordova.js"></script>');
    result = result.replace(/<!-- do not remove - placeholder cordova_plugins.js -->/g, '<script type="text/javascript" src="cordova_plugins.js"></script>');

    fs.writeFile(index_html, result, 'utf8', function (err) {
        if (err) return console.log(err);
    });
});
