var logger = require('powwow-server-common').logger;
var config = require('../config');
var browser =  require('powwow-server-common').browser;

exports.loginBasic = function (page, params) {
    page.basicAuth(params.username, params.password)
        .href(config.loginURL);
   /* var loadFailed = false;
    console.log(params);

    page.onResourceLoad(config.loginURL).then(function (response) {
        if (response.contentType == null && response.status == null && response.headers.length == 0) {
            loadFailed = true;
        }
    });

    page.onLoadFailure(/hkdnt222.asia.ad.flextronics.com:82\/Error/)
    
    
        .data(function (data) {
            if (loadFailed) {
                data.error = "Unable to access " + config.loginURL;
            } else {
                data.error = "Login failed.  Please check your username and password and try again.";
            }
            data.username = params.username;
        })
        .screen('login');

    browser.getMainPage().set('settings.userName', params.username, function () {
        browser.getMainPage().set('settings.password', params.password, function () {
            browser.getMainPage().open(config.loginURL);
        });
    });
    */

}
/*
exports.logout = function (page, params) {

    
        .open("about:blank").clearCookies();
        self.close();
} */