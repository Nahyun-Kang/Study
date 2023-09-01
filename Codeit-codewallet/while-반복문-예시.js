// while문 (while statement)
let i = 30;

while (i % 7 !==0) {
  i++;
}

console.log(i)

//1부터 10까지 출력

let j = 1;

while (j <= 10) {
  console.log(j);
  j++;
}

//1부터 100까지 홀수만 출력
let a = 0

while (a < 100){
 if (a % 2 === 1){
   console.log(a);
 }
  i++;
}

// 정수 n의 약수는 n을 어떤 수로 나누었을 때 나누어떨어지게 하는 정수를 의미합니다. 만약 정수 i가 정수 n의 약수라면, n을 i로 나누었을 때 나머지가 0이 됩니다.

// while문을 활용해서 정수 180의 약수를 모두 출력하고, 총 몇 개의 약수가 있는지 출력하는 프로그램을 작성해 보세요.

//180의 약수 구하기

const N = 180;
// 여기에 코드를 작성하세요

let b = 1;
let count = 0;
while (b <= 180){
  if (N % b === 0){
      console.log(b)
      count++
  }
  b++
}

console.log(`180의 약수는 총 ${count}개입니다.`)


//구구단 

//>>for문으로 돌릴 시

for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

//while문으로 돌릴 시
let i = 1;
while (i <= 9) {
  let j = 1;
  while (j <= 9) {
    console.log(`${i} * ${j} = ${i * j}`);
    j++;
  }
  i++;
}


//피보나치
//>> 내가 푼 방식 // 여기에 코드를 작성하세요
let count = 0;
let forward = 1;
let backward = 1;
let result = 0;

while (count<50){

  console.log(forward);
  result = forward + backward;
  forward = backward;
  backward = result;
  count++;
  
}


//>>모범답안
let previous = 0;
let current = 1;
let i = 1;

while (i <= 50) {
  console.log(current);
  let temp = previous;  // previous를 임시 보관소 temp에 저장
  previous = current;
  current = current + temp;  // temp에는 기존 previous 값이 저장돼 있음
  i++;
}

//or 
let previous = 0;
let current = 1;

for (let i = 1; i <= 50; i++) {
  console.log(current);
  let temp = previous;  // previous를 임시 보관소 temp에 저장
  previous = current;
  current = current + temp;  // temp에는 기존 previous 값이 저장돼 있음
}