/**
 * Created by pc on 2015/1/21.
 */
angular.module('scHelper',[])
    .filter("orderClass", function( ) {
        return function (direction) {
            if (direction === -1){
                return "glyphicon-chevron-down";
            }else{
                return "glyphicon-chevron-up";
            }

        }
    });