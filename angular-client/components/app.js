
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
    $http.post('/users', { username })
      .then((res) => console.log(res))
      .catch(err => console.error(err));
    // $http.post('/users', $scope.data)
    //   .then((response) => {
    //   console.log(username);
    //     return $http({
    //       method: 'POST',
    //       url: '/users',
    //       data: {
    //         username: username
    //       },
    //       headers: { 'Content-Type': 'application/json' }
    //     });
    // }).catch(err => console.error(err));
  },
  $scope.removeUser = (username) => {
    $http.delete('/users', $scope.data)
      .then((response) => {
      console.log(username);
        return $http({
          method: 'DELETE',
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
        $scope.ships.push(starShip);
      })
    }).catch(err => {
      console.error(err);
    })
  },
    $scope.registerShip = (ship, username) => {
      
      $http.post('/ships', { ship, username })
        .then((res) => console.log(res))
        .catch(err => console.error(err));
      // console.log($scope.data)
        // .then((response) => {
        //   // console.log(username);
        //   return $http({
        //     method: 'POST',
        //     url: '/ships',
        //     data: {
        //       username: username,
        //       ship: ship
        //     },
        //     headers: { 'Content-Type': 'application/json' }
        //   });
        // }).catch(err => console.error(err));
    }
    $scope.changeShip = (ship, username) => {

      $http.put('/ships', { ship, username })
        .then((res) => console.log(res))
        .catch(err => console.error(err));
      // console.log($scope.data)
        // .then((response) => {
        //   // console.log(username);
        //   return $http({
        //     method: 'PUT',
        //     url: '/ships',
        //     data: {
        //       username: username,
        //       ship: ship
        //     },
        //     headers: { 'Content-Type': 'application/json' }
        //   });
        // }).catch(err => console.error(err));
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