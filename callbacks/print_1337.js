var getHTML = require('../getHTML');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function print1337 (html) {
  let string1337 = html;
  
  const changes = {
    a: '4',
    e: '3',
    l: '1',
    o: '0',
    s: '5',
    t: '7',
    ck: 'x',
    er: '0r',
    you: 'j00'
  }
  
  const aRegex = /a/gi;
  const eRegex = /e/gi;
  const lRegex = /l/gi;
  const oRegex = /o/gi;
  const sRegex = /s/gi;
  const tRegex = /t/gi;
  const ckRegex = /ck/gi;
  const erRegex = /er/gi;
  const youRegex = /you/gi;
  
  string1337 = string1337.replace(ckRegex, changes.ck);
  string1337 = string1337.replace(erRegex, changes.er);
  string1337 = string1337.replace(youRegex, changes.you);
  string1337 = string1337.replace(aRegex, changes.a);
  string1337 = string1337.replace(eRegex, changes.e);
  string1337 = string1337.replace(lRegex, changes.l);
  string1337 = string1337.replace(oRegex, changes.o);
  string1337 = string1337.replace(sRegex, changes.s);
  string1337 = string1337.replace(tRegex, changes.t);
  
  
  console.log(string1337);

}

getHTML.getAndPrintHTML(requestOptions, print1337);
