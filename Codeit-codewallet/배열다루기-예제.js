// 배열 (Array)

let members = ['쿤갈레', 'Zerrard66','우리생각해써','흙토끼', 'End Miracle'];
//배열도 객체이다.
//type of 연산자로 확인해보면 object가 뜬다.

//배열 안에 데이터 개수를 확인할 수 있는 법, 배열의 길이
console.log(members.length)
console.log(members['length'])

// 배열에 추가하는 법
members[5] = 'NiceCodeit';
console.log(members[5]);

members[6]
//을 할 경우, 5번 값 또한 자동으로 생성되며 빈요소가 된다.

//배열의 값 바꾸기
members[3] ='달토끼'

// delete로 완전히 지울 수 없다. 


//온도 바꾸기

let celsiusTemps = [27, 25, 26, 22, 28, 27, 21];
let fahrenheitTemps = [];

for (let i = 0; i < celsiusTemps.length; i++) {
  fahrenheitTemps[i] = (celsiusTemps[i] * 9 / 5) + 32;
}

// fahrenheitTemps 테스트
console.log(fahrenheitTemps);


//while문
// let celsiusTemps = [27, 25, 26, 22, 28, 27, 21];
// let fahrenheitTemps = [];

// let i = 0;
// while (i < celsiusTemps.length) {
//   fahrenheitTemps[i] = (celsiusTemps[i] * 9 / 5) + 32;
//   i++;
// }

// // fahrenheitTemps 테스트
// console.log(fahrenheitTemps);

