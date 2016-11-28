 (function() {
  'use strict';

  /**
   * @ngdoc directive
   * @name amsConsulta.component
   * @description
   *
   */

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
  
  
  
  
  
  
  
  
