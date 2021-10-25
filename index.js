var express = require('express');
var app = express();

var requestIp = require('request-ip');
var geoip = require('geoip-country');

app.get('/',function(request, response) {

    var clientIp = requestIp.getClientIp(request);
    var ipg="14.140.206.158"
    var geo = geoip.lookup(clientIp.toString());
    if (geo.country==="IN")
    {
        response.redirect('https://www.facebook.com/goo');
    }
    else
    {
        response.redirect("https://www.google.com/");
    }


});

app.listen(process.env.PORT || 3000, () => console.log('App listening on port 3000'))
