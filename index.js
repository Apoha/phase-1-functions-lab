// Code your solution in this file!

function distanceFromHqInBlocks(distance){
  
 const headQuater = 42;

if (headQuater > distance){
    return headQuater - distance
} else{ return distance - headQuater}

//   return Math.abs(
// distance - headQuater);
   
  }

  distanceFromHqInBlocks(43);
  distanceFromHqInBlocks(50);
  distanceFromHqInBlocks(34);





  function distanceFromHqInFeet(distance){
     
    
      const forLongFeet = 264;
     const distanceInBlocks = distanceFromHqInBlocks(distance);

return (distanceInBlocks * forLongFeet )}




// function distanceTravelledInFeet(distance, pickUpLocation){

//     const forLongFeet1 = 264; 
//     //const distanceInBlocks2 = distanceFromHqInBlocks(distance);

//     return (distance - pickUpLocation) * forLongFeet1

// }



function distanceTravelledInFeet(distance, pickUpLocation){

   return Math.abs(distance-pickUpLocation)*264;

}






function calculatesFarePrice (start, destination){
const feet = distanceTravelledInFeet(start, destination);

if (feet<400){
    return 0

} else if (feet >= 400 && feet<2000) {

    return (feet - 400)* .02

} else if ( feet > 2000 && feet < 2500){
return 25

} else if (feet> 2500){

    return 'cannot travel that far'
}
    
}




calculatesFarePrice(34, 32);
