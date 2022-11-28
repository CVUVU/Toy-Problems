const speedLimit = 70;
//difference in speed

function meritPoints (userInput){
    let speedDifference = userInput - speedLimit
    let result;
    if (userInput > speedLimit && userInput % 5 === 0 && speedDifference/5 >=12){
        result = "License revoked"
    } else if(userInput > 70 && speedDifference % 5 === 0){
        result = `${speedDifference/5} merit points`;
    }else{
        result ="Ok";
    }
    return result
}
console.log(meritPoints(130));

