// //is a number between 0 and 100
// const re = / [0-9] | [1-9][0-9] | 100 /g;

// const str = " 21  57  3737  38  504  849  84  84  72  30  933  38 ";

// console.log(str.match(re));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// const str1 = "My number is 1234567890";
// const str2 = "(123)456-7890 is my number";
// const str3 = "Call me at 123-456-7890";
// const str4 = "You can reach me at 123 456 7890";

// //make an expression to find the phone number in each case

// const re2 = /\(?[0-9][0-9][0-9]\)? ?-?[0-9][0-9][0-9]-? ?[0-9][0-9][0-9][0-9]/g;
// // const re2 = /\(?[0-9]{3}[\) -]?[0-9]{4}/g is cleaner and more efficient, but the other one works

// console.log(str1.match(re2), str2.match(re2), str3.match(re2), str4.match(re2));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//password checker
// starts with 3 or more letter capital or lower
// then 1 optional capital letter that isnt r, d, k, n, u or p
// then ends in at least 1 odd number

const re = /[a-zA-Z]{3,}[A-CE-JL-MOQS-TV-Z]?[^13579]/g

const str = 'CleV2 fffFF2 fjoe3 jjJ1'

console.log(str.match(re))