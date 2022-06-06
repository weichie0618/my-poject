// 1.
// function printMany() {
//   for (let i = 1; i <= 100; i++) {
//     console.log(i);
//   }
// }
// printMany();

// 2.
// function printEvery() {
//   for (let i = 1; i <= 88; i += 3) {
//     console.log(i);
//   }
// }
// printEvery();

// 3.
// function stars(e) {
//
//   let a = "";
//   for (let i = 0; i < e; i++) {
//     a += "*";
//   }
//   console.log(a);
// }

// stars(3);
// stars(10);

// 4.
// function isUpperCase(a) {
//   if (a.length == 0) {
//     console.log(false);
//     return;
//   }
//   for (let i = 0; i < a.length; i++) {
//     let x = a[i].toUpperCase();
//     if (x != a[i]) {
//       console.log(false);
//       return;
//     }
//   }
//   console.log(true);
// }
// isUpperCase("ABCD"); // returns true
// isUpperCase(""); // returns false
// isUpperCase("aBCD");

// 5.
// function isAllUpperCase(a) {
//   if (a.length == 0) {
//     console.log(false);
//     return;
//   }

//   let x = a.toUpperCase();
//   if (x == a) {
//     console.log(true);
//     return;
//   }
//   console.log(false);
// }

// isAllUpperCase("ABCD"); // returns true
// isAllUpperCase(""); // returns false
// isAllUpperCase("ABCDEFGHIJKLm"); // returns false

// 6.
// function position(a) {
//   let x = a.toLowerCase();
//   if (x == a) {
//     console.log(-1);
//   }
//   for (let i = 0; i < a.length; i++) {
//     let x = a[i].toUpperCase();
//     if (x == a[i]) {
//       let f = a.indexOf(x);
//       console.log(x, f);
//       return;
//     }
//   }
// }

// position("abcd"); // prints -1
// position("AbcD"); // prints A 0
// position("abCD"); // prints C 2

// 7.
// function findSmallCount(a, b) {
//   let x = 0;
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] < b) {
//       x++;
//     }
//   }
//   return x;
// }

// console.log(findSmallCount([1, 2, 3], 2)); // returns 1
// console.log(findSmallCount([1, 2, 3, 4, 5], 0)); // returns 0

// 8.
// function findSmallerTotal(a, b) {
//   let x = 0;
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] < b) {
//       x += a[i];
//     }
//   }
//   return x;
// }

// console.log(findSmallerTotal([1, 2, 3], 1)); // returns 0
// console.log(findSmallerTotal([3, 2, 5, 8, 7], 999)); // returns 25
// console.log(findSmallerTotal([3, 2, 5, 8, 7], 0)); // returns 0
// console.log(findSmallerTotal([1, 2, 3], 3)); // returns 3

// 9.
// function findAllSmall(a, b) {
//   let x = 0;
//   let arr = [];
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] < b) {
//       arr.push(a[i]);
//     }
//   }
//   return arr;
// }

// console.log(findAllSmall([1, 2, 3], 10)); // returns [1, 2, 3]
// console.log(findAllSmall([1, 2, 3], 2)); // returns [1]
// console.log(findAllSmall([1, 3, 5, 4, 2], 4)); // returns [1, 3, 2]

// 10.
// function sum(a) {
//   let x = 0;
//   for (let i = 0; i < a.length; i++) {
//     x += a[i];
//   }
//   return x;
// }

// console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // returns 55
// console.log(sum([])); // return 0
// console.log(sum([-10, -20, -30])); // return -60

// 11.
// function stars(a) {
//   let x = " ";
//   for (let i = 0; i < a; i++) {
//     console.log((x += "*"));
//   }
// }

// stars(1);
// // *
// stars(4);
// // *
// // **
// // ***
// // ****

// 12.
// function makeStars(a) {
//   let x = "/n";
//   let s = " ";
//   for (let i = 0; i < a; i++) {
//     x += "*";
//     s += x;
//   }
//   console.log(s.slice(3));
// }

// makeStars(1);
// // *
// makeStars(2);
// // *\n**
// makeStars(5);
// // *\n**\n***\n****\n*****

// 13.
// function stars2(a) {
//   let x = "";

//   for (let i = 0; i < a; i++) {
//     console.log((x += "*"));
//   }
//   for (let i = a; i > 0; i--) {
//     console.log(x.slice(0, i - 1));
//   }
// }

// stars2(1);
// // *
// stars2(2);
// // *
// // **
// // *
// stars2(3);
// // *
// // **
// // ***
// // **
// // *
// stars2(4);
// // *
// // **
// // ***
// // ****
// // ***
// // **
// // *

// 14.
// function table(a) {
//   // for (let i = 0; i < 10; i++) {
//   let x = "";
//   for (let j = 1; j < 10; j++) {
//     x += a + "x" + j + "=" + a * j + "\n";
//   }
//   // console.log(x);
//   return x;
//   // }
// }

// console.log(table(3));
// // 3 x 1 = 3
// // 3 x 2 = 6
// // ...
// // 3 x 9 = 27

// 15.
// function table9to9() {
//   let x = "";
//   for (let i = 1; i < 10; i++) {
//     for (let j = 1; j < 10; j++) {
//       x += i + "x" + j + "=" + i * j + "\n";
//     }
//   }
//   console.log(x);
// }

// table9to9();
// // 1 x 1 = 1
// // 1 x 2 = 2
// // 1 x 3 = 3
// // ...
// // 1 x 9 = 9
// // 2 x 1 = 2
// // 2 x 2 = 4
// // ...
// // 9 x 9 = 81

// 16.
// function fib(a) {
//   if (a >= 3) {
//     let x = 0;
//     let b = 1;
//     let c = 2;
//     for (let i = 3; i < a; i++) {
//       x = c;
//       c += b;
//       b = x;
//     }
//     console.log(c);
//   } else if (a >= 1 && a <= 2) {
//     console.log(1);
//   } else {
//     console.log(0);
//   }
// }

// fib(0); // returns 0
// fib(1); // returns 1
// fib(2); // returns 1
// fib(3); // returns 2
// fib(8); // returns 21

// 17;
// function reverse(a) {
//   let x = "";
//   for (let i = a.length - 1; i >= 0; i--) {
//     x += a[i];
//   }
//   console.log(x);
// }

// reverse("abcd"); // returns "dcba"
// reverse("I am a good guy."); // returns ".yug doog a am I"

// 18;
// function swap(a) {
//   let x = a.toUpperCase();

//   console.log(x[0].toLowerCase() + x.slice(1, a.length));
// }

// swap("Aloha"); // returns "aLOHA"
// swap("Love you."); // returns "lOVE YOU."

// 19.
// function findMin(a) {
//
//   let x = a[0];
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] < x) {
//       x = a[i];
//     }
//   }
//   console.log(x);
// }

// findMin([1, 2, 5, 6, 99, 4, 5]); // returns 1
// findMin([]); // returns undefined
// findMin([1, 6, 0, 33, 44, 88, -10]); // returns -10

// 20
// function findNthMin(a, b) {
//   for (let i = 0; i < a.length; i++) {
//     let x = 0;
//     for (let j = 0; j < a.length; j++) {
//       if (a[j] < a[i]) {
//         x += 1;
//       }
//     }
//     if (x == b - 1) {
//       console.log(a[i]);
//     }
//   }
// }

// findNthMin([1, 2, 3, 4, 5], 1); // returns 1
// findNthMin([1, 3, 5, 7, 9], 3); // returns 5

// function min2(q) {
//   let x = q[0];
//   for (let i = 0; i < q.length; i++) {
//     if (q[i] < x) {
//       x = q[i];
//     }
//   }
//   return x;
// }

// function mySort(a) {
//   let arr = [];
//   while (a.length > 0) {
//     let min = min2(a);
//     arr.push(min);
//     a.splice(a.indexOf(min), 1);
//   }
//   console.log(arr);
// }

// mySort([17, 0, -3, 2, 1, 0.5]); // returns [-3, 0, 0.5, 1, 2, 17]

// 27;
// function stars(a, b) {
//   let x = "";
//   for (let i = 0; i < a; i++) {
//     x += " ";
//   }
//   for (let d = 0; d < b; d++) {
//     x += "*";
//   }
//   return x;
// }

// function inversePyramid(a) {
//   let x = 2 * a - 1;
//   let v = 0;
//   for (let k = 0; k < a; k++) {
//     console.log(stars(v, x));
//     x -= 2;
//     v++;
//   }
// }
// inversePyramid(15);
// // *******
// //  *****
// //   ***
// //    *

const user1 = {
  name: "Jordan",
  age: 28,
};
const user2 = {
  name: "Jordan",
  age: 28,
};
console.log(user2 == user1);
console.log(user2 === user1);
