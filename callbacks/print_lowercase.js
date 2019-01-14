var getHTML = require('../getHTML');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase (html) {

  console.log(html.toLowerCase());

}

getHTML.getAndPrintHTML(requestOptions, printLowerCase);
