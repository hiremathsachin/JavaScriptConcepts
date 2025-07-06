
// one way to declare an array in javascript
let a=Array[4];

a =new Array(1,2,3,4);

console.log(a);

console.log(typeof(a)); //[ 1, 2, 3, 4 ]

a.push(3); // adds last to an array

console.log(a); //[ 1, 2, 3, 4, 3 ]

a.pop();  // removes last to an array

console.log(a); //[ 1, 2, 3, 4 ]

a.unshift(0); // adds first to an array

console.log(a); //[0, 1, 2, 3, 4 ]
//******************************************************************************** */
// second way to declare an array

let b=[1,2,3,4];

console.log(b);

console.log(typeof(b)); //[ 1, 2, 3, 4 ]

b.push(3); // adds last to an array

console.log(b); //[ 1, 2, 3, 4, 3 ]

b.pop();  // removes last to an array

console.log(b); //[ 1, 2, 3, 4 ]

b.unshift(0); // adds first to an array

console.log(b); //[0, 1, 2, 3, 4 ]

b.indexOf(1);

console.log('index of b.indexOf(1) '+b.indexOf(1)); //1

b.includes(5)

console.log('index of b.includes(1) '+b.includes(5)); // check given element present or not in an array


// Loops in Arrays

for (let i = 0; i < b.length; i++) {
    console.log(i);  
}