const https = require('https');

let streamData = '';

function getAndPrintHTML (options, callback) {

  https.get(options, function(response) {
    response.setEncoding('utf8');

    response.on('data', function(data) {
      streamData += data;
    });

    response.on('error', function(err) {
      console.error(err);
    });

    response.on('end', function() {
      callback(streamData);
      console.log('Stream Finished');
    });

  });
}

function printHTML (html) {
  console.log(html);
}

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
};

module.exports = {getAndPrintHTML};

