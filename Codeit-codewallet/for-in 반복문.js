//for.. in -> 객체의 property Name을 가져오는 for문

let codeit = {
  name: '코드잇',
  bornYear: 2017,
  isVeryNice : true,
  worstCourse : null,
  bestCourse: '자바스크립트 프로그래밍 기초'
}

for (let key in Codeit) {
  console.log(key);
}

//
let hyesoonScore = {
  '데이터 모델링의 이해': 10,
  '데이터 모델과 성능': 8,
  'SQL 기본': 22,
  'SQL 활용': 18,
  'SQL 최적화 기본 원리': 20,
};

let minsoonScore = {
  '데이터 모델링의 이해': 14,
  '데이터 모델과 성능': 8,
  'SQL 기본': 12,
  'SQL 활용': 4,
  'SQL 최적화 기본 원리': 16,
};

function passChecker(scoreObject) {
  // 여기에 코드를 작성해 주세요.
  let totalScore = 0;

  for (let subject in scoreObject) {
    totalScore += scoreObject[subject];
  }
}

passChecker(hyesoonScore);
passChecker(minsoonScore);