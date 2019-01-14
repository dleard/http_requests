const https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');

    response.on('data', function(data) {
      console.log(data + '\n');
    });

    response.on('error', function(err) {
      console.error(err);
    });

    response.on('end', function() {
      console.log();
      console.log('Stream Finished');
    });

  });

}

getAndPrintHTMLChunks();