 (function() {
  'use strict';

  /**
   * @ngdoc directive
   * @name amsTratamientos.component
   * @description
   *
   */

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
  
  
