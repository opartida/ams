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
        .state('app.consulta', {
          url: '/',
          views: {
            'content@': {
              template: '<ams-consulta></ams-consulta>'
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
        
       

    });
      

  })();

