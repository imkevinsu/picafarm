'use strict';

angular.module('picafarm', []).config(function () {});
'use strict';

angular.module('picafarm').component('farmerPage', {

  bindings: {
    farm: '<'
  },

  // controller: 'mainCtrl',  

  templateUrl: 'views/farmerPage.html'

});
'use strict';

angular.module('picafarm').component('farmerSearch', {

  templateUrl: 'views/farmerSearch.html',
  controller: 'mainCtrl'

});
'use strict';

angular.module('picafarm').component('login', {

  templateUrl: 'views/login.html',
  controller: 'mainCtrl'

});
'use strict';

angular.module('picafarm').component('navbar', {

  templateUrl: 'views/navbar.html',
  controller: 'mainCtrl'

});
'use strict';

angular.module('picafarm').controller('mainCtrl', ["$scope", "$http", function ($scope, $http) {

  $scope.farmerArr = [];

  $scope.pages = {
    farmerSearchPage: true,
    loginPage: false,
    signUpPage: false
  };

  $scope.get = function () {
    $http.get("/search").then(function (response) {
      console.log(response.data);
      $scope.farmerArr = response.data;
    }).catch(function (response) {
      console.log(response);
    });
  };

  $scope.pageChanger = function (val) {
    for (var item in $scope.pages) {
      if (item === val) {
        pages[item] = true;
      } else {
        pages[item] = false;
      }
    }
  };

  $scope.get();
}]);
"use strict";
//# sourceMappingURL=bundle.js.map
