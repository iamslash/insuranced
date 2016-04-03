'use strict';

angular.module('quickstart')
    .controller('ProgressbarCtrl', function ($scope) {

        $scope.progressbars = [{
            type: 'success',
            max: 100,
            value: 30,
            classes: ''
        }, {
            type: 'danger',
            max: 100,
            value: 60,
            classes: 'progress-striped'
        }, {
            type: 'warning',
            max: 200,
            value: 180,
            classes: 'progress-striped active'
        }];

    });