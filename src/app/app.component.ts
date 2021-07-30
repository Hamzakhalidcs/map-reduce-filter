import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hands on map, filter , reduce';
}

const arr = [5, 1, 3, 2, 6]
//  map used to transform array 

// use to double all element of arr
function double(x) {
  return x * 2
}

const output = arr.map(double)
console.log(output)

// use to triple all element 
function triple(x) {
  return x * 3
}

const triple1 = arr.map(triple)
console.log(triple1)

// use to change in to binary 

// function binary(x){
//   return x.toString(2);
// }

// const binary1  = arr.map(binary)
// console.log(binary1)

// same function can be written as part 2 

// const binary1 = arr.map(function binary(x){
//   return x.toString(2)
// })

// console.log(binary1)

// same function part 3 
const binary = arr.map((x) => x.toString(2))
console.log(binary)

// filter use to filter value from array like a pattern e.g odd, even num, num>...., like that 
// filter oddvalues 
function isOdd(x) {
  return x % 2 == 1
}

const isOdd1 = arr.filter(isOdd)
console.log(isOdd1)

// for even function 
function isEven(x) {
  return x % 2 == 0
}

const isEven1 = arr.filter(isEven)
console.log(isEven1)

const gtrFour = arr.filter((x) => x > 4)
console.log(gtrFour)

// reduce use to get a single value like we can say the total
// non functional 
function findum(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
  }
  return sum
}
console.log("Total of arr element is :", findum(arr))

// functional using reduce 
const sum1 = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc
}, 0);

console.log(sum1)

// finding max from arr
function findmax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return max;
}
console.log(findmax(arr))

const findmax1 = arr.reduce(function (max, curr) {
  if (curr > max) {
    max = curr
  }
  return max
}, 0)

console.log(findmax1)

