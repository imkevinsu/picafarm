angular.module('picafarm').controller('mainCtrl', function ($scope, $http) {

  $scope.farmerArr = [];

  $scope.pages = {
    farmerSearchPage: false,
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

  $scope.pageChanger = (val) => {
    for (var item in pages) {
      if (item === val) {
        pages[item] = true;
      } else {
        pages[item] = false;
      }
    }
  };

  $scope.get();

});