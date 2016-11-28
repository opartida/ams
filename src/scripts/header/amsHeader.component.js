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
  
  
