function sumAll (...numbers) {
    let max = Math.max(...numbers);
    let min = Math.min(...numbers);
    
    for (let number of numbers) {
        if (isNaN(number) || typeof number !== "number" || number <= 0)  
        return "ERROR";
    }

    let sum = 0;

    for (let i = min; i <= max; i++){
      sum += i;
    }

    return sum;
  }

  console.log(sumAll("hello",4));

// Do not edit below this line
module.exports = sumAll;
