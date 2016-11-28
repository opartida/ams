 (function() {
  'use strict';

  /**
   * @ngdoc directive
   * @name amsMain.component
   * @description
   *
   */

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
  
  
  
  
