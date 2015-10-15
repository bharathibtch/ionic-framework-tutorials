angular.module('starter', ['ionic'])

.controller("ExampleController", function ($scope) {

$scope.openInExternalBrowser = function()
{
  // Open in external browser
  window.open('http://google.com','_system','location=yes'); 
};

$scope.openInAppBrowser = function()
{

  // Open in app browser
  window.open('http://google.com','_blank'); 
};

$scope.openCordovaWebView = function()
{
  // Open cordova webview if the url is in the whitelist otherwise opens in app browser
  window.open('http://google.com','_self'); 
};

});