/* JavaScript code here */

console.log("External Javascript")

// Task 2: Array Sum

function sum(arr){
    var sum = 0;
    arr.forEach(function(item, index){
        sum = sum + item;
})
return sum;
}

console.log(sum([1, 2, 3, 4]))