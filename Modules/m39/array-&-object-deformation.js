// How to restructure the Arrays

let fruits =["Apple", "Banana","Mango"]

let [first,second] = fruits

console.log(first, second)   // Output: Apple Banana

// To skip the second value,

let [first_fruit, ,second_fruit] = fruits
console.log(first_fruit,second_fruit)   // Output: Apple Mango