
function removeFromArray(passedArray, ...args) {
    const newArray = [];
    passedArray.forEach(function (items){
      if (!args.includes(items)) {
        newArray.push(items);
      };
    })
    
    return newArray;
  }

  console.log(removeFromArray([1,2,3,4], 2,3));

// Do not edit below this line
module.exports = removeFromArray;
