function Bike(stats){

    // Converts from degrees to radians.
    var radians = function(degrees) {
        return degrees * Math.PI / 180;
    };

    // Converts from radians to degrees.
    var degrees = function(radians) {
        return radians * 180 / Math.PI;
    };

    var round = function(float){
        return Math.round(float * 10) / 10
    }

    var scale = function(float){
        return float * 0.5
    }
    return {
       dimensions: stats,
       coordinates: {
           bottomBracket: function(){
               return [0,0]
           },
           seatTubeTop: function(){
               var seatTubeAngles = [90, stats.seatTubeAngle, (90 - stats.seatTubeAngle)];
               var seatTubeLength = stats.seatTubeLength;
               var vertical = 0 - ( seatTubeLength * Math.sin( radians(stats.seatTubeAngle) ) ) / Math.sin(radians(90))
               var horizontal = 0 - ( seatTubeLength * Math.sin( radians(90 - stats.seatTubeAngle) ) ) / Math.sin(radians(90))
               return [round(horizontal), round(vertical)]
           },
       }
    }
}