// FOR
console.log("**********FOR***********")
// 1.
const t = [15,12,13,20];
let sum = 0;
for(i=0;i<t.length;i++){
    sum += t[i];
}
const v = sum / t.length;
console.log(`Per ${t.length} dienas buvo dresuojama ${sum} minuciu. Vidutisniskai per diena katinas buvo dresuojamas ${v} minuciu.`);

// 2.
console.log('************************')


const b = 4;
const d = 5;
const n = 3;

let sum2 = 0;
for(i=0;i<n;i++){
  sum2 += (b+d); 
}

console.log(sum2);

// 3.

console.log('************************')

const dd = [5,7,5,5];
const kp = 100;
let sum3 = 0;
for(i=0;i<dd.length;i++){
  sum3 += dd[i];
}
let ats = kp + sum3;
console.log(ats);

// 4.

console.log('************************')

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
console.log('************************')


const s = 7;
const N = 5;

let t5 = 0,ats5 = 0;
for(i=0;i<N;i++){
  t5 = t5 * 10 + s;
  ats5 += t5;
}
console.log(ats5)

// WHILE 
console.log("*********WHILE*********")
// 1.
function mbk(a, b) {
  let min = Math.min(a, b);
  while(min >= 2){
     if(a % min === 0 && b % min === 0){
        return (a*b)/min;
     };
     min--;
  };
  return (a*b);
};
const m = 5, n1=3;
console.log(mbk(m,n1));

// 2.
console.log('************************')


let atlyginimas = {}
 const start  = 1000
 const add = 50
  let count = 0
  let sumWhile = start
  while(true) {
    count++
    sumWhile += add
    if(count === 3) {
      atlyginimas.men3 = sumWhile
      continue
    }else if(count === 12){
      atlyginimas.men12 = sumWhile
      continue
    }else if(sumWhile === start*2){
      atlyginimas.double = count
      continue
    }
    else if(sumWhile >= 4000) {
      atlyginimas.big = count
      break
    }
  }
  console.log(atlyginimas)
  console.log(`po vienu metu atlyginimas bus: ${atlyginimas.men12}`)
  console.log(`po 3 men atlyginimas bus: ${atlyginimas.men3}`)
  console.log(`atlyginimas bus dvigubai didesnis po ${atlyginimas.double} mėnesių`)
  console.log(`atlyginimas bus didesnis nei 4000 po ${atlyginimas.big} mėnesių`)

  // 3.
  console.log('************************')

  let number = 1234, reverse = 0, remainder;
  console.log(number)

  while (number>0) {
      remainder = number%10;
      reverse = reverse * 10 + remainder;
      number = Math.floor(number / 10);
  }
  
  console.log(reverse);

  // 4.
  console.log('************************')

  const domuo = 36
  let suma = 0
  let counteris = 0
  let arrCount = []
  
  console.log(`domuo: ${domuo}`)
  while(suma <= domuo) 
  {
    counteris++
    suma += counteris  
    arrCount.push(counteris)
    if(suma === domuo) break
  }
  console.log(`${arrCount} skaitmenu sekos suma yra lygi ${domuo}`)
// 5.

console.log('************************')

function priminiaiArSudetiniai(numa,numb){
  numcount = 1
while(numcount < Math.max(numa,numb)){
  numcount++
  if(numa % numcount === 0 && numb % numcount === 0) return "sudėtiniai"
  if(numa % numcount != 0 && numb % numcount != 0) return "pirminiai"
}}

const num5m = 4,num5n = 8
let atss = priminiaiArSudetiniai(num5m,num5n)
console.log(`${num5m} ir ${num5n} yra ${atss}`)


// 6.
console.log('************************')
const num6 = 24
let numm = num6 
let counteris6 = 1
while(true) {
  counteris6++
  if(numm % counteris6 === 0) numm /= counteris6
  else break
}
if(numm === 1) console.log(`${num6} turi faktoriala`)
else console.log(`${num6} neturi faktorialo`)

// ciklai + masyvai
// 1.

console.log('************************')

const apskritimai = [1,2,5,3,4,5,2,5,5,1]
let didziausias = apskritimai.reduce(function(a,b){return Math.max(a,b)})
let didziausi = []
apskritimai.forEach(apskritimas => {
  if(apskritimas === didziausias) didziausi.push(apskritimas)
});

console.log(`visi apskritimai: ${apskritimai}`)
console.log(`didziausi: ${didziausi}`)

// 2.
console.log('************************')

const indeliai = [500,1200,999,1500,50,4600,1010,600,80,400]
let daugiau = 0;
indeliai.forEach(indelis => {
  if(indelis > 1000) daugiau++
})

console.log(`visi indeliai: ${indeliai} , ir is ju daugiau nei 1000 idejo: ${daugiau}`)

// 3.
console.log('************************')

const nelanke = [1,2,5,4,3,5,21,4,6,8,1,15,12,1]
console.log(nelanke.sort(function(a,b){return a-b}))

// 4.
console.log('************************')

let skyriai = [5,10,15,23,45,2,86,42,26,4,16]
console.log(skyriai)

skyriai.forEach((skyrius,idx) => {
  if(skyrius % 2 === 0) {
    skyriai[idx] = skyrius + idx
  }
})

console.log(`skyriai po: ${skyriai}`)

// 5.
console.log('************************')

let pazymiai = [
   [9, 10, 8, 9, 10, 5],
   [10, 5, 6, 6, 7, 8],
   [9, 9, 9, 9, 8, 7],
   [9, 8, 8, 7, 8, 9],
   [7, 2, 2, 4, 2, 3]
  ]
let vidurkiai = []

pazymiai.forEach((mokinys,idx)=> {
  let total = 0
  let vidurkis = 0
  mokinys.forEach(pazimys =>{
    total += pazimys
    vidurkis = total / mokinys.length
  })
  vidurkiai[idx] = vidurkis.toFixed(1)
   })
console.log('pazymiai: ')
console.table(pazymiai)
console.log('vidurkiai:')
console.table(vidurkiai)