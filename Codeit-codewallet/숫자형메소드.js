// Number 
let myNumber = 0.3591;

//toFixed(0~100)
console.log(myNumber.toFixed(3)); // 0.359 ->3자리수를 고정시키기 때문에 4번째 자리수는 반올림하여 없앤다.
console.log(myNumber.toFixed(7)); // 0.3591000->초과한 자릿수만큼 0으로 대체 

//이렇게 바뀐 글자는 문자열이 된다. + 연산 사용할 때는 Number 함수를 사용해서 형변환을 해주어야 한다.
//자바스크립트에서 Number()함수 대신 그냥 앞에 +를 붙여주면 자동으로 형변환된다.
console.log(+myNumber.toFixed(2));

// toString(2~36) 해당 진수로 바꿔주는 메소드
console.log(myNumber.toString(2));
console.log(myNumber.toString(8));
console.log(myNumber.toString(16)); 

//*주의해야 할 점
// console.log(255.toString(2)) 점을 소수점으로 인식해서 정수형에 메소드를 쓰기 위해선
console.log(255..toString(8)); // 점을 두개 찍어줘야 한다.
console.log((255).toString(8));
console.log(myNumber.toString(16));

//다음중 숫자 123을 표현하는 코드가 아닌 것
Number((4 * 30 + 3).toString(10));
(123.456).toFixed(0); // -> 문자열이 된다.
1.23e2;
0x7b.toString(10) * 1; // 1을 곱해서 숫자가 된다.
