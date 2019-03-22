var req = require('request')
req('http://www.google.com', function(err, res, bod) {
    console.log('error: ', err);
    console.log('statuseCode: ', res && res.statusCode);
    console.log('body: ', bod);
});