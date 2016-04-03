'use strict';

angular.module('quickstart')
    .controller('AlertCtrl', function ($scope) {
      $scope.alerts = [{
        type: 'danger',
        msg: '경고 메세지 입니다.'
      }, {
        type: 'warning',
        msg: '경고 메세지 입니다.'
      }, {
        type: 'info',
        msg: '경고 메세지 입니다.'
      }, {
        type: 'success',
        msg: '경고 메세지 입니다.'
      }];
    });