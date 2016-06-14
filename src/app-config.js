module.exports = appConfig;

function appConfig($urlRouterProvider, chatServiceProvider, userResourceProvider, $authProvider, $translateProvider) {
    'use strict';
    'ngInject';

    $urlRouterProvider.otherwise('/room');

    chatServiceProvider.socketEndpoint = 'https://ng-chat-server.herokuapp.com';

    userResourceProvider.apiEndpoint = 'https://ng-chat-server.herokuapp.com/api';

    $authProvider.baseUrl = 'https://ng-chat-server.herokuapp.com/api';

    $authProvider.github({
        clientId: '1a6d774f4bb5a6d1c97a'
    });

    $authProvider.google({
        clientId: '1004489526825-32qv25037p5b6ffggb2tev7ieoru3top.apps.googleusercontent.com'
    });
/*
    $translateProvider.translations('en', {
        LOG_IN: "Log In",
        PLEASE_LOG_IN: "Please log in",
        GOOGLE_ACCOUNT: "Google account",
        GITHUB_ACCOUNT: "Github account",
        ONLINE_USERS: "Online users",
        NAME_SURNAME: "Jméno Příjmení"
    });*/

    //require('./lang/en.json');
    var json = require("./lang/en.json");
    console.log(json)
    //$translateProvider.preferredLanguage('en');
}
