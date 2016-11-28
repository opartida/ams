(function() {
  'use strict';

  /**
   * @ngdoc overview
   * @name tsi.webtastic.itcs.dialog.lineSeparation
   *
   * @description
   * Line separation dialog. Dialog to create a line separation for different lines with rail
   * replacement bus service between the selected stations.
   */
  angular.module(
      'ams',
      // DEPENDENCIES
      [
          'ui.router'
      ]);

}());
  
  

(function() {
  'use strict';

  /**
   * @ngdoc directive
   * @name ams.component
   * @description
   *
   */

  amsCtrl.$inject = ["$window"];
  angular.module('ams').component('ams', {
        bindings: {},
        controller: amsCtrl,
        controllerAs: 'amsCtrl',
        templateUrl: 'src/scripts/ams/ams.tpl.html'
      }
  );

  /**
   * @ngdoc controller
   * @name ams.controllers:amsCtrl
   * @description
   *
   */
  function amsCtrl($window) {

    var self = this;

    /**
     * @ngdoc method
     * @name $onInit
     * @methodOf ams.controllers:ams
     * @description
     *
     */
    self.$onInit = function $onInit() {
      
    };

  }
})();
  
  

 (function() {
  'use strict';

  /**
   * @ngdoc directive
   * @name amsConsulta.component
   * @description
   *
   */

  amsConsultaCtrl.$inject = ["$window", "$stateParams"];
  angular.module('ams').component('amsConsulta', {
        bindings: {},
        controller: amsConsultaCtrl,
        controllerAs: 'amsConsultaCtrl',
        templateUrl: 'src/scripts/amsConsulta/amsConsulta.tpl.html'
      }
  );

  /**
   * @ngdoc controller
   * @name ams.controllers:amsConsultaCtrl
   * @description
   *
   */
  function amsConsultaCtrl($window,$stateParams) {

    var self = this;

    /**
     * @ngdoc method
     * @name $onInit
     * @methodOf ams.controllers:amsConsultaCtrl
     * @description
     *
     */
    self.$onInit = function $onInit() {
      
    };
    
    

  }
})();
  
  
  
  
  
  
  
  

 (function() {
  'use strict';

  /**
   * @ngdoc directive
   * @name amsMain.component
   * @description
   *
   */

  amsMainCtrl.$inject = ["$window", "$state"];
  angular.module('ams').component('amsMain', {
        bindings: {},
        controller: amsMainCtrl,
        controllerAs: 'amsMainCtrl',
        templateUrl: 'src/scripts/amsMain/amsMain.tpl.html'
      }
  );

  /**
   * @ngdoc controller
   * @name ams.controllers:amsMainCtrl
   * @description
   *
   */
  function amsMainCtrl($window, $state) {

    var self = this;

    /**
     * @ngdoc method
     * @name $onInit
     * @methodOf ams.controllers:amsMainCtrl
     * @description
     *
     */
    self.$onInit = function $onInit() {
      
    };
    
    self.handleClickPacientes = function handleClickPacientes(tipo) {
      $state.transitionTo('app.pacientes', {paciente: tipo});
    };

  }
})();
  
  
  
  

 (function() {
  'use strict';

  /**
   * @ngdoc directive
   * @name amsPacientes.component
   * @description
   *
   */

  amsPacientesCtrl.$inject = ["$window", "$stateParams"];
  angular.module('ams').component('amsPacientes', {
        bindings: {},
        controller: amsPacientesCtrl,
        controllerAs: 'amsPacientesCtrl',
        templateUrl: 'src/scripts/amsPacientes/amsPacientes.tpl.html'
      }
  );

  /**
   * @ngdoc controller
   * @name ams.controllers:amsPacientesCtrl
   * @description
   *
   */
  function amsPacientesCtrl($window,$stateParams) {

    var self = this;

    /**
     * @ngdoc method
     * @name $onInit
     * @methodOf ams.controllers:amsPacientesCtrl
     * @description
     *
     */
    self.$onInit = function $onInit() {
      
    };
    
    self.checkTipoPaciente = function checkTipoPaciente(tipo) {
      return $stateParams.paciente === tipo;
    }; 

  }
})();
  
  
  
  
  
  

 (function() {
  'use strict';

  /**
   * @ngdoc directive
   * @name amsTratamientos.component
   * @description
   *
   */

  amsTratamientosCtrl.$inject = ["$window"];
  angular.module('ams').component('amsTratamientos', {
        bindings: {},
        controller: amsTratamientosCtrl,
        controllerAs: 'amsTratamientosCtrl',
        templateUrl: 'src/scripts/amsTratamientos/amsTratamientos.tpl.html'
      }
  );

  /**
   * @ngdoc controller
   * @name ams.controllers:amsTratamientosCtrl
   * @description
   *
   */
  function amsTratamientosCtrl($window) {

    var self = this;

    /**
     * @ngdoc method
     * @name $onInit
     * @methodOf ams.controllers:amsTratamientosCtrl
     * @description
     *
     */
    self.$onInit = function $onInit() {
      
    };

  }
})();
  
  

//  (function() {
//    'use strict';
//    angular.module('ams')
//      .provider('firebaseAmsService', function() {
//
//        this.$get = firebaseAmsService;
//        
//        function firebaseAmsService(firebase, $firebaseObject, $q) {
//          var self = this;
//
//          self.initFirebaseConfig = initFirebaseConfig;          
//
//          function initFirebaseConfig() {
//            var config = {
//              apiKey: "AIzaSyAjvhfZgZNwDeCxiZf0ZPzUhOThXB2AcxQ",
//              authDomain: "amsfisioterapia-d99e7.firebaseapp.com",
//              databaseURL: "https://amsfisioterapia-d99e7.firebaseio.com",
//              storageBucket: "amsfisioterapia-d99e7.appspot.com",
//              messagingSenderId: "963955952981"
//            };
//            firebase.initializeApp(config);
//          }
//
//          
//
//          return self;
//        }
//      });
//  })();




  (function() {
    'use strict';

    angular.module('ams').config(["$stateProvider", "$locationProvider", function($stateProvider,$locationProvider) {

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
        
        $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });

    }])
      .run(["$rootScope", "$state", "$stateParams", "$timeout", function($rootScope, $state, $stateParams, $timeout) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $timeout(function() {

          $state.transitionTo('app.home');

        }, 500);


      }]);

  })();


(function() {
  'use strict';

  angular
    .module('ams')
    .component('amsHeader', {
      
      bindings: {
        
      },
      controller: headerCtrl,
      controllerAs: 'headerCtrl',
      templateUrl: 'src/scripts/header/amsHeader.tpl.html'
    });

  function headerCtrl() {
    var self = this;


    self.$onInit = function() {
      
    };
  }
})();
  
  
