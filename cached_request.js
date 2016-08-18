var request = require('cached-request')(require('request'));

request.setCacheDirectory('request-cache');

request({
  url: 'http://hellohappy.org',
  ttl: 99999999999999999999999999
}, function(err, response, body) {
  console.log(body);
});
