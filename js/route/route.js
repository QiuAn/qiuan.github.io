/***
 * 设置模块路由
 */
var settingRoute = angular.module('settingRoute', ['ngRoute']);

settingRoute.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            controller : 'SettingCtrl',
            templateUrl: 'js/views/index.html'
        })
        .when("/info", {
            controller : 'InfoCtrl',
            templateUrl: 'js/views/info.html'
        })
        .when("/activity", {
            controller : 'ActivityCtrl',
            templateUrl: 'js/views/activity.html'
        })
        .when("/group", {
            controller : 'GroupCtrl',
            templateUrl: 'js/views/group.html'
        })
        .otherwise({
            redirectTo : '/'
        });
}]); 

