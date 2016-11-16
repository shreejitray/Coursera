/**
 * Created by schaud3 on 11/16/16.
 */
(function () {
    'use strict';
    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope){
        $scope.lunch = '';
        $scope.message = '';
        $scope.check = function(){
            let count=0;
            $scope.style={};
            $scope.boxStyle = {};
            let items = $scope.lunch.split(',');
            items.forEach( (item) => {
                let trimmed = item.trim();
                if(trimmed.length >0){
                    count++;
                }
            });
            if(count == 0){
                $scope.message='Please enter data first';
                $scope.style={color:'red'};
                $scope.boxStyle['border-color']='red';
            }else if(count >3){
                $scope.style={color:'green'};
                $scope.boxStyle['border-color']='green';
                $scope.message = 'Too much!';
            }else if(count<=3){
                $scope.style={color:'green'};
                $scope.boxStyle['border-color']='green';
                $scope.message = 'Enjoy!';
            }
        }
    }

})();
// (function () {
//     'use strict';
//
//     angular.module('MsgApp', [])
//         .controller('MsgController', MsgController);
//
//     MsgController.$inject = ['$scope'];
//     function MsgController($scope, $filter) {
//         $scope.name = "Yaakov";
//         $scope.stateOfBeing = "hungry";
//         $scope.cookieCost = .45;
//
//         $scope.sayMessage = function () {
//             var msg = "Yaakov likes to eat healthy snacks at night!";
//             var output = $filter('uppercase')(msg);
//             return output;
//         };
//
//         $scope.feedYaakov = function () {
//             $scope.stateOfBeing = "fed";
//         };
//     }
//
// })();
