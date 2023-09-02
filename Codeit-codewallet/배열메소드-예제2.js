
//배열의 첫 요소를 삭제: shift()
members.shift();
console.log(members)

// 배열의 마지막 요소를 삭제: pop()
members.pop();
console.log(members);

//배열의 첫 요소로 값 추가: unshift(value)
members.unshift('NiceCodeit');

//배열의 마지막 요소로 값 추가: push(value)
members.push('HiCodeit');


//[배열에서 특정 값 찾기(indexOf/lastindexOf)]

// 배열에서 특정 값을 찾으려면 indexOf 메소드를 사용하면 됩니다. array.indexOf(item)을 하면 array 배열에 item이 포함되어 있는지 확인할 수 있습니다.

// 만약 포함되어 있다면, item이 있는 인덱스가 리턴됩니다.
// 포함되어 있지 않다면, -1이 리턴됩니다.
// 여러 번 포함되어 있으면, 처음 발견된 인덱스가 리턴됩니다.

// let brands = ['Google', 'Kakao', 'Naver', 'Kakao'];
// console.log(brands.indexOf('Kakao'));
// console.log(brands.indexOf('Daum'));

//그리고 비슷하게 lastIndexOf라는 메소드가 있는데요. indexOf와는 반대로 탐색을 뒤에서 부터 하게 됩니다. 그러니깐 방금과 같은 경우에 'Kakao'를 lastIndexOf 메소드로 찾게 되면 마지막에 있는 인덱스가 리턴되겠죠?



// //[배열에서 특정 값이 있는지 확인하기(includes)]
// 배열에서 특정 값이 있는지 확인하기 (includes)
// indexOf/lastIndexOf는 특정 값을 찾아서 해당 값의 index를 알려줍니다.
// 하지만, 때로는 그냥 그 값이 배열안에 있는지, 그 여부만 확인하고 싶을 수도 있는데요. 그럴때는 includes 라는 메소드를 활용하면 됩니다.

// array.includes(item)을 하게되면 array배열에 item이 있을 경우 true를, 없을 경우 false를 리턴합니다.


// let brands = ['Google', 'Kakao', 'Naver', 'Kakao'];
// console.log(brands.includes('Kakao'));
// console.log(brands.includes('Daum'));


//[배열 뒤집기 (reverse)]
let brands = ['Google', 'Kakao', 'Naver', 'Kakao'];
console.log(brands);
brands.reverse();
console.log(brands);

//// 투표 결과 리스트
let votes = [
  '이재식', '이재식', '이규하', '이규하', '이규하',
  '이재식', '이재식', '이규하', '이규하', '이재식',
  '이규하', '이규하', '이규하', '이규하', '이재식',
  '이재식', '이규하', '이재식', '이재식', '이재식',
  '이재식', '이재식', '이규하', '이규하', '이규하',
  '이규하', '이규하', '이재식', '이규하', '이규하',
  '이규하', '이규하', '이재식', '이규하', '이규하',
  '이규하', '이재식', '이재식', '이재식', '이규하',
];

// 후보별 득표수 객체
let voteCounter = {};

// votes 배열을 이용해서 voteCounter 객체를 정리하기
for (let name of votes) {
  // 여기에 코드를 작성하세요
  if (name in voteCounter === false){
    voteCounter[name] = 1;
  } else {
    voteCounter[name] += 1;
  }

}

// 후보별 득표수 출력
console.log(voteCounter);