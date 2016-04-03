'use strict';

angular.module('quickstart')
    .controller('ButtonCtrl', function ($scope) {
      $scope.button1 = 0;
      $scope.button2 = 'left';
      $scope.buttons = {};
    });
