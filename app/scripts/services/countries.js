'use strict';

angular.module('appNameApp')
.service('Countries', ['backend', function (backend) {
  return {
    load: function () {
      return backend.getCountries();
    }
  };
}]);