 (function() {
  'use strict';

  /**
   * @ngdoc directive
   * @name amsPacientes.component
   * @description
   *
   */

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
  
  
  
  
  
  
