
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
  $scope.ships = [];
  $scope.addUser = (username) => {
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
  },
  $scope.starWars = () => {
    $http.get('https://swapi.co/api/starships')
    .then((response) => {
      response.data.results.forEach(starShip => {
        // console.log(starShip)
        $scope.ships.push(starShip);
      })
    }).catch(err => {
      console.error(err);
    })
  },
    $scope.registerShip = (ship, username) => {
      console.log(ship, username, "ship and username")
      $http.post('/ships', $scope.data)
      // console.log($scope.data)
        .then((response) => {
          // console.log(username);
          return $http({
            method: 'POST',
            url: '/ships',
            data: {
              username: username,
              ship: ship
            },
            headers: { 'Content-Type': 'application/json' }
          });
        }).catch(err => console.error(err));
    }
  $scope.starWars();
})
.component('app', {
  bindings: {
    ships: '<'
  },
  controller: 'AppCtrl',
  templateUrl: '/templates/app.html'
});