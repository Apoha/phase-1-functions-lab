// Code your solution in this file!

function distanceFromHqInBlocks(distance){
  
 const headQuater = 42;

if (headQuater > distance){
    return headQuater - distance
} else{ return distance - headQuater}

  return Math.abs(
distance - headQuater);
   
  }

  distanceFromHqInBlocks(43);
  distanceFromHqInBlocks(50);
  distanceFromHqInBlocks(34);





  function distanceFromHqInFeet(distance){
      //const headQuater = 42;
    
      const forLongFeet = 264;
     const distanceInBlocks = distanceFromHqInBlocks(distance);

return (distanceInBlocks * forLongFeet )}




function distanceTravelledInFeet(distance, pickUpLocation){

    const forLongFeet1 = 264; 
    const distanceInBlocks2 = distanceFromHqInBlocks(distance);

    return (distanceInBlocks2+pickUpLocation)* forLongFeet1

}