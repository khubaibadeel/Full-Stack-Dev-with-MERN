// How to restructure the Arrays

let fruits =["Apple", "Banana","Mango"]

let [first,second] = fruits

console.log(first, second)   // Output: Apple Banana

// To skip the second value,

let [first_fruit, ,second_fruit] = fruits
console.log(first_fruit,second_fruit)   // Output: Apple Mango


// How to restructure the Objects

let user1={
    firstname:"Khubaib",
    age: 16,
    city:"Faisalabad"
}

let {firstname,age,city}= user1

console.log(firstname,age,city)

// To skip the second value,
let user2={
    firstname:"Khubaib",
    age: 16,
    city:"Faisalabad"
}
let {firstname: firstname_1, city: city_1} = user2
console.log(firstname_1,city_1)


// While working on an application, we usually get data from backend in the form of arrays & object which we need to restructure.