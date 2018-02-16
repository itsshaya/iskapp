  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBTWaA-uzjdq9iG7T7-OXmMb9N7nYPpob4",
    authDomain: "iskapp-4b885.firebaseapp.com",
    databaseURL: "https://iskapp-4b885.firebaseio.com",
    projectId: "iskapp-4b885",
    storageBucket: "iskapp-4b885.appspot.com",
    messagingSenderId: "416997569621"
  };
  firebase.initializeApp(config);

var app = angular.module('starter', ['ionic', 'firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html'
  })

    .state('login', {
      url: '/login',
          templateUrl: 'templates/login.html',
          controller: 'AuthCtrl as auth'
    })
    .state('app.profile', {
      url: '/profile',
      views: {
        'menuContent': {
          templateUrl: 'templates/profile.html'
        }
      }
    })
  .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html'
        }
      }
    })
  .state('app.settings', {
    url: '/settings',
    views: {
      'menuContent': {
        templateUrl: 'templates/settings.html'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
