//String

//문자는 배열과 비슷한 부분이 많다.
let myString = 'Hi Codeit'

//요소 접근
console.log(myString[3]); //대괄호 표기법
console.log(myString.chartAt(3)); // charAt 메소드 


//문자열 길이
console.log(myString.length); //length 프로퍼티


//요소 탐색
console.log(myString.indexOf('a')) // 앞 부터
console.log(myString.lastIndexOf('i')) // 뒤 부터

//대소문자 변환
console.log(myString.toUpperCase()); // 대문자
console.log(myString.toLowerCase()); // 소문자 

// 양 끝 공백 제거
console.log(myString.trim());

//slice 메소드 부분 문자열 접근 (start, end)

console.log(myString.slice(0,2)); 
console.log(myString.slice(3)); //두번째 파라미터를 생략하면 시작지점부터 끝까지 반환
console.log(myString.slice()); // 공백으로 비워두면 전체 글자 출력

// for of 문으로 쉽게 활용할 수 있다.

let String = 'Codeit';

for (let str of myString) {
  console.log(str);
}


let yourString = 'Codeit';
let yourArray = ['C', 'o', 'd', 'e', 'i', 't'];

console.log(typeof yourString);
console.log(typeof yourArray);

// typeof 연산자 사용해서 보면 string과 object가 나오고
// 일치 비교뿐만 아니라 느슨한 동등 비교에서도 false가 나오는 것을 확인할 수 있다.




// typeof 연산자 사용해서 보면 string과 object가 나오고
// 일치 비교뿐만 아니라 느슨한 동등 비교에서도 false가 나오는 것을 확인할 수 있다.


//let lyrics = "[재석]너에게 나 하고 싶었던 말 고마워 미안해 함께 있어서 할 수 있어서 웃을 수 있어[준하] 정말 고마웠어 내 손을 놓지 않아줘서 힘을 내볼게 함께 있다면 두렵지 않아[홍철] 내가 늘 웃으니까 내가 우습나 봐 하지만 웃을 거야 날 보고 웃는 너 좋아[명수] 자꾸만 도망치고 싶은데 저 화려한 큰 무대 위에 설 수 있을까? 자신 없어..[하하] 지금까지 걸어온 이 길을 의심하지는 마 잘못 든 길이 때론 지도를 만들었잖아[형돈] 혼자 걷는 이 길이 막막하겠지만 느리게 걷는 거야 천천히 도착해도 돼[길] 술 한 잔 하자는 친구의 말도 의미 없는 인사처럼 슬프게 들릴 때 날 찾아와";

let hyungdon = null;

// 여기에 코드를 작성하세요
for (let i = 0; i < lyrics.length; i++){
  if (lyrics[i] === '[' && lyrics[i+1] === '형'){
    let temp = lyrics.slice(i+1, lyrics.length);
    let nextIndex = temp.indexOf('[');
    hyungdon = '['+temp.slice(0,nextIndex);
  }
} 



// 테스트 코드
console.log(hyungdon);


//> 정석 방법

// /let lyrics = "[재석]너에게 나 하고 싶었던 말 고마워 미안해 함께 있어서 할 수 있어서 웃을 수 있어[준하] 정말 고마웠어 내 손을 놓지 않아줘서 힘을 내볼게 함께 있다면 두렵지 않아[홍철] 내가 늘 웃으니까 내가 우습나 봐 하지만 웃을 거야 날 보고 웃는 너 좋아[명수] 자꾸만 도망치고 싶은데 저 화려한 큰 무대 위에 설 수 있을까? 자신 없어..[하하] 지금까지 걸어온 이 길을 의심하지는 마 잘못 든 길이 때론 지도를 만들었잖아[형돈] 혼자 걷는 이 길이 막막하겠지만 느리게 걷는 거야 천천히 도착해도 돼[길] 술 한 잔 하자는 친구의 말도 의미 없는 인사처럼 슬프게 들릴 때 날 찾아와";

// let hyungdon = null;

// // 여기에 코드를 작성하세요
let lyrics = "[재석]너에게 나 하고 싶었던 말 고마워 미안해 함께 있어서 할 수 있어서 웃을 수 있어[준하] 정말 고마웠어 내 손을 놓지 않아줘서 힘을 내볼게 함께 있다면 두렵지 않아[홍철] 내가 늘 웃으니까 내가 우습나 봐 하지만 웃을 거야 날 보고 웃는 너 좋아[명수] 자꾸만 도망치고 싶은데 저 화려한 큰 무대 위에 설 수 있을까? 자신 없어..[하하] 지금까지 걸어온 이 길을 의심하지는 마 잘못 든 길이 때론 지도를 만들었잖아[형돈] 혼자 걷는 이 길이 막막하겠지만 느리게 걷는 거야 천천히 도착해도 돼[길] 술 한 잔 하자는 친구의 말도 의미 없는 인사처럼 슬프게 들릴 때 날 찾아와";

// let hyungdon = null;

// 여기에 코드를 작성하세요
// let startIndex = lyrics.indexOf('[형돈]');
// let endIndex = lyrics.indexOf('[길]');

// hyungdon = lyrics.slice(startIndex, endIndex);

// // 테스트 코드
// console.log(hyungdon);

