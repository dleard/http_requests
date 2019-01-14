const https = require('https');

let streamData = '';

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };
  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');

    response.on('data', function(data) {
      streamData += data;
    });

    response.on('error', function(err) {
      console.error(err);
    });

    response.on('end', function() {
      console.log(streamData);
      console.log('Stream Finished');
    });

  });
}

getAndPrintHTML();

