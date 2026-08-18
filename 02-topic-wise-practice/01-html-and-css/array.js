let fruits = ["Apple", "Banana", "Orange"];
//accessing array elements
console.log(fruits[0]);
console.log(fruits[1]); 
console.log(fruits[2]); 
//modifying array elements
fruits[1] = "Mango";
console.log(fruits);
//array methods push
fruits.push("grapes");
console.log(fruits);
//pop
fruits.pop("apple");
console.log(fruits);
//shift
fruits.shift("apple");
console.log(fruits);
//unshift
fruits.unshift("apple");
console.log(fruits);
//length of an array
console.log(fruits.length);
//index
console.log(fruits.indexOf("Banana"));
console.log(fruits.indexOf("grapes"));
console.log(fruits.indexOf("Banana"));
//slice
console.log(fruits.slice(1,3));
//reverse
fruits.reverse();
console.log(fruits);

