  (function() {
    'use strict';

    angular.module('ams').config(function($stateProvider,$locationProvider) {

      $stateProvider
        .state('app', {
          abstract: true,
          url: ''
        })
        .state('app.home', {
          url: '/',
          views: {
            'content@': {
              template: '<ams-main></ams-main>'
            }
          }
        })
        .state('app.tratamientos', {
          url: '/tratamientos',
          views: {
            'content@': {
              template: '<ams-tratamientos></ams-tratamientos>'
            }
          }
        })
        .state('app.pacientes', {
         url: '/pacientes/:paciente',
          views: {
            'content@': {
              template: '<ams-pacientes></ams-pacientes>'
            }
          }
        });
        
        $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });

    })
      .run(function($rootScope, $state, $stateParams, $timeout) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $timeout(function() {

          $state.transitionTo('app.home');

        }, 500);


      });

  })();

