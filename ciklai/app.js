// FOR

// 1.

const t = [15,12,13,20];
let sum = 0;
for(i=0;i<t.length;i++){
    sum += t[i];
}
const v = sum / t.length;
console.log(`Per ${t.length}buvo dresuojama ${sum}minuciu. Vidutisniskai per diena katinas buvo dresuojamas ${v} minuciu.`);

// 2. 

const b = 4;
const d = 5;
const n = 3;

let sum2 = 0;
for(i=0;i<n;i++){
  sum2 += (b+d); 
}

console.log(sum2);

// 3.

const dd = [5,7,5,5];
const kp = 100;
let sum3 = 0;
for(i=0;i<dd.length;i++){
  sum3 += dd[i];
}
let ats = kp + sum3;
console.log(ats);

// 4.

function perfectNum(num) {
  let sum4 = 0;
  for(i=1;i<num;i++){
  if(num % i === 0){
    sum4 += i;
  }}
  if(num === sum4){
    console.log(`${num} is perfect number`)
  }else {
    console.log(`${num} is not a perfect number`)
  }
}
const num = 28;
const num1 = 27;
perfectNum(num);
perfectNum(num1);

// 5.

const s = 7;
const N = 5;

let t5 = 0,ats5 = 0;
for(i=0;i<N;i++){
  t5 = t5 * 10 + s;
  ats5 += t5;
}
console.log(ats5)