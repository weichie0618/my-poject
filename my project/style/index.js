function addUpTo(n) {
  let x = 0;
  let i = 0;
  while (i < n) {
    i++;
    x += i;
  }
  result = x;
  console.log(result);
  return result;
}
addUpTo(5);
addUpTo(100);
addUpTo(5000);
addUpTo(100000);
// const array = [2, 5, 9];

// console.log(array);

// const index = array.indexOf(5);
// if (index > -1) {
//   array.splice(index, 1); // 2nd parameter means remove one item only
// }

// // array = [2, 9]
// console.log(array);
// let x = Math.floor(Math.random() * 100);
// let a = 0,
//   b = 99;
// let q = 0;
// while (q < 1) {
//   let cc = prompt("請猜" + a + "~" + b);
//   cc = Number(cc);
//   if (isNaN(cc)) {
//     cc = alert("請在輸入一次");
//     break;
//   } else if (cc < b && cc > a) {
//     if (cc != x && cc > x) {
//       b = cc;
//     } else if (cc != x && cc < x) {
//       a = cc;
//     } else if (cc == x) {
//       alert("你答對了， 答案是" + x);
//       console.log(q);
//       q++;
//     }
//   }
// }
const text = document.querySelectorAll(".thepaths");
for (let i = 0; i < text.length; i++) {
  console.log(`text number ${i} length is ${text[i].getTotalLength()}`);
}

const lastword = document.querySelector("#seventeen");
const animation = document.querySelector("div.animation");

lastword.addEventListener("animationend", () => {
  animation.style = "transition:all 1s ease ;opacity:0;pointer-events:none;";
});
