const myArray = [5, 6, 6, 5, 8, 8, 7, 8, 7, 4, 5, 8, 5, 6];
const newArray = [];

myArray.map(numbers => {
    if(numbers > 6){
       newArray.push(numbers);
    }
})
console.log(newArray)