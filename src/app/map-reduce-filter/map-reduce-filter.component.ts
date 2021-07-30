import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-reduce-filter',
  templateUrl: './map-reduce-filter.component.html',
  styleUrls: ['./map-reduce-filter.component.css']
})
export class MapReduceFilterComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
const users = [
  { firstname: "akshay", lastname: "Khanna", age: 26 },
  { firstname: "Hamza", lastname: "Khalid", age: 55 },
  { firstname: "Mustafa", lastname: "Zafar", age: 34 },
  { firstname: "Yaseen", lastname: "Iqbal", age: 26 },
]
//  list of full name 
const output = users.map((x) => x.firstname + " " + x.lastname)
console.log(output)


// finding the number of same age 
const sumOfSameAge = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age]
  }
  else {
    acc[curr.age] = 1
  }
  return acc
}, {})

console.log(sumOfSameAge)
//  this is  a comment 
// function for finding the first name whose age <30 (i.e using filter and map both )
// const findingAge = users.filter((x) => x.age < 30).map((x) => x.firstname);
const findingAge = users.filter((x) => x.age < 30).map((x) => x.firstname)

console.log("AGE : ", findingAge)

const findingAgeReduce = users.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.firstname);
  }
  return acc;
}, []);

console.log(findingAgeReduce)