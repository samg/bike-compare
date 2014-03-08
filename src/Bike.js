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
               var seatTubeLengthEffective = stats.seatTubeLength - 10;
               var seatTubeAngles = [90, stats.seatTubeAngle, (90 - stats.seatTubeAngle)];
               var vertical = 0 - ( seatTubeLengthEffective * Math.sin( radians(stats.seatTubeAngle) ) ) / Math.sin(radians(90))
               var horizontal = 0 - ( seatTubeLengthEffective * Math.sin( radians(90 - stats.seatTubeAngle) ) ) / Math.sin(radians(90))
               return [round(horizontal), round(vertical)]
           },
           rearHub: function(){
               // sin x/stats.bbDrop = sin 90 / stats.chainstayLength
               var bbDropEffective = stats.bbDrop + 10;
               var chainStayLengthEffective = stats.chainstayLength - 5;
               var rearHubAngle = degrees(Math.asin((bbDropEffective * Math.sin(radians(90)))/chainStayLengthEffective));
               var bbAngle = 90 - rearHubAngle;
               //  horizontal/ bb = stats.chainstayLength / sin 90
               var horizontal = (chainStayLengthEffective *  Math.sin(radians(bbAngle))) /  Math.sin(radians(90));
               return [round(0 - horizontal), round(0 - bbDropEffective)]

           }
       }
    }
}