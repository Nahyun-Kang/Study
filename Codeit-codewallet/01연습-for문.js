
//문제
// 주어진 높이(height)에 맞게 *로 삼각형을 그리는 함수 printTriangle()을 완성해 봅시다.
// 높이: 1
// *
// 높이: 3
// *
// **
// ***
// 높이: 5
// *
// **
// ***
// ****
// *****


function printTriangle(height) {
	// 여기에 코드를 작성하세요
	let message ='';
  for(let i = 1 ; i <= height ; i++){
    message = message + '*'
    console.log(message)
  }  
};

// 테스트 코드
console.log('높이: 1');
printTriangle(1);

console.log('높이: 3');
printTriangle(3);

console.log('높이: 5');
printTriangle(5);