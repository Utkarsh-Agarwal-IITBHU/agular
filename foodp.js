(function () {
'use strict';

angular.module("Eatry", [])
.controller("Eatingmenu", eatInput);
eatInput.$inject=['$scope'];
function eatInput($scope){
    $scope.choices="";
    $scope.result="";
    $scope.displayresult= function (){
        $scope.result= calculateresult($scope.choices);
    }
    
    function calculateresult (rep){
        var a=rep.split(",");
        var c=[];
        console.log(a);
        console.log(a.length);
        for(var i=0;i<a.length;i++){
            if(a[i]!=""){
                c.push(a[i]);

            }
        }
        console.log(c);
        console.log(c.length);

        if(c.length<=3){
            if(c==""){
                return ("Please Enter Data First");
            }
            else{
                return ("Enjoy");

            }
        }
        else{
            return ("Too much!");
        }

    };
}    
})();