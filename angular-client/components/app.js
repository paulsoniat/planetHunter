
// angular.module('MyApp', [])
//   .controller('MyCtrl', ['$scope', '$http', function ($scope, $http) {
//     $scope.user = {};
//     $scope.results = [];

//     $scope.search = function () {
//       /* the $http service allows you to make arbitrary ajax requests.
//        * in this case you might also consider using angular-resource and setting up a
//        * User $resource. */
//       $http.get('/your/url/search', { params: user },
//         function (response) { $scope.results = response; },
//         function (failure) { console.log("failed :(", failure); });
//     }
//   }]);

angular.module('app')
.controller('AppCtrl', function($scope, $http){
  $scope.addUser = function(username) {
    $http.post('/users', $scope.data)
      .then((response) => {
      console.log(username);
        return $http({
          method: 'POST',
          url: '/users',
          data: {
            username: username
          },
          headers: { 'Content-Type': 'application/json' }
        });
    }).catch(err => console.error(err));
  }
})
.component('app', {
  bindings: {
    //create a post function binding here

  },
  controller: 'AppCtrl',
  templateUrl: '/templates/app.html'
});