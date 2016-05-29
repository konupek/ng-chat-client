var angular = require('angular');
var ngMaterial = require('angular-material');
var uiRouter = require('angular-ui-router');
var satellizer = require('satellizer');

var loginController = require('./login/login-controller.js');
var userController = require('./user/user-controller.js');
var userConfig = require('./user-config.js');

module.exports = angular
    .module('app.user', [ngMaterial, uiRouter, satellizer])
    .controller('loginController', loginController)
    .controller('userController', userController)
    .config(userConfig)
    .name;