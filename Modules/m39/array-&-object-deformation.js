// How to restructure the Arrays

let fruits =["Apple", "Banana","Mango"]

let [first,second] = fruits

console.log(first, second)   // Output: Apple Banana

// To skip the second value,

let [first_fruit, ,second_fruit] = fruits
console.log(first_fruit,second_fruit)   // Output: Apple Mango


// How to restructure the Objects

let user={
    firstname:"Khubaib",
    age: 16,
    city:"Faisalabad"
}

let [firstname,age,city]= user
console.log(firstname,age,city)