var express = require('express');
var app = express();

var requestIp = require('request-ip');
var geoip = require('geoip-country');

app.get('/',function(request, response) {

    var clientIp = requestIp.getClientIp(request);
    var geo = geoip.lookup(clientIp);
    console.log(clientIp);
    console.log(geo);
    response.send(clientIp)

});

app.listen(process.env.PORT || 3000, () => console.log('App listening on port 3000'))
