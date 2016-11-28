(function() {
  'use strict';

  /**
   * @ngdoc directive
   * @name ams.component
   * @description
   *
   */

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
  
  
