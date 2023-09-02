// /Date객체처럼 자바스크립트의 내장 객체 중 다양한 연산들을 유용하게 사용하기 위해 Math라는 객체가 있습니다.

// 이번 노트에서는 Math객체의 다양한 메소드에 대해 살펴봅시다.

//절댓값

console.log(Math.abs(-10));
console.log(Math.abs(10));


//최댓값
console.log(Math.max(2, -1, 4, 5, 0));  // ->5


//최솟값
console.log(Math.min(2, -1, 4, 5, 0)); // ->-1

// 거듭제곱
console.log(Math.pow(2, 3)); // 8
console.log(Math.pow(5, 2)); //25


//제곱근
console.log(Math.sqrt(25)); //5
console.log(Math.sqrt(49)); //7

//반올림 
console.log(Math.round(2.3));
console.log(Math.round(2.4));
console.log(Math.round(2.49));
console.log(Math.round(2.5));
console.log(Math.round(2.6));


//버림과 올림 (Floor and Ceil)
console.log(Math.floor(2.4));
console.log(Math.floor(2.49));
console.log(Math.floor(2.8));
console.log('-');
console.log(Math.ceil(2.4));
console.log(Math.ceil(2.49));
console.log(Math.ceil(2.8));


//난수
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
