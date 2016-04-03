'use strict';

angular.module('quickstart')
    .controller('AccordionCtrl', function ($scope) {
      $scope.closeOthers = true;

      $scope.groups = [{
        title: '헤더 1',
        content: '내용 1 입니다.'
      }, {
        title: '헤더 2',
        content: '내용 2 입니다.'
      }, {
        title: '헤더 3',
        content: '내용 3 입니다.'
      }];
    });