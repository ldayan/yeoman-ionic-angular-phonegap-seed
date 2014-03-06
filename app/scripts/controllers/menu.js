'use strict';

angular.module('appNameApp').controller('MenuCtrl', ['$scope', function ($scope) {
  $scope.openLeft = function() {
    $scope.sideMenuController.toggleLeft();
  };
}]);
