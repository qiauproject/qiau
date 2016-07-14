var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope,$http) {
    url = "http://api.openweathermap.org/data/2.5/forecast?q=Qazvin,ir&units=metric&appid=c90fc1475e237f7aafd567d3a6deff71";
    $http.get(url)
        .success(function (data) {
            $scope.data = data;
            $scope.class0 = "owf-" + data.list[0].weather[0].id ;
            $scope.class1 = "owf-" + data.list[1].weather[0].id ;
            $scope.class2 = "owf-" + data.list[2].weather[0].id ;
            $scope.class3 = "owf-" + data.list[3].weather[0].id ;

        })
        .error(function () {
        });
});



function myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

function myAccFunc(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        x.previousElementSibling.className += " w3-opacity w3-grey";
    } else {
        x.className = x.className.replace(" w3-show", "");
        x.previousElementSibling.className =
            x.previousElementSibling.className.replace(" w3-opacity w3-grey", "");
    }
}


