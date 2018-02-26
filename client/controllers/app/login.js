angular.module('app').controller('app_login', app_login);
function app_login($scope, app, $q, powwowLoginNew) {
    'use strict';
    app.init($scope); 
    console.log("11111111111");
    $scope.login = function () {
     $scope.app.showLoading('Logging in');    
    var credentials = {'username': $scope.data.username, 'password': $scope.data.password};
    console.log("222222222222222");
    app.call('login.loginBasic', credentials);
    console.log("3333333333333");
    }; 
    app.origEstablishConnection = app.establishConnection;
    app.establishConnection = function (params) {
        console.log("44444444444");
        if (app.alreadyConnected) {
            console.log("Calling powwowLoginNew getcachedcredentials");
            var credentials = powwowLoginNew.getCachedCredentials();
            if (!credentials.username) {
                console.log("No cached credentials");
                // if no user credentials we cannot perform App login - forvard user to loginScreen
                powwowLoginNew.clearCachedCredentials();
                window.location.reload();
                return;
            }
            app.call('login.loginBasic', credentials);
        } else {
            app.origEstablishConnection(params);
        }
    }
}
