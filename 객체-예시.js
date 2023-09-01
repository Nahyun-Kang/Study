// 객체 (object)
let codeit = {
  name : '코드잇',
  bornYear : 2017,
  isVeryNice : true,
  worstCource: null,
  bestCourse: {
    title: '자바스크립트 프로그래밍 기초',
    language: 'JavaScript'
  }
};

//점 표기법(objectName.propertyName)
console.log(codeit.bornYear);

console.log(codeit['born Year'])
console.log(codeit['born'+ 'Year']);

let propertyName = 'name';
console.log(codeit[propertyName]);

console.log(codeit.bestCourse['title'])

codeit.name = 'codeit';
codeit.ceo = '강영훈';

delete codeit.worstCourse;

// 'propertyName' in object (in 연산자)
console.log('name' in codeit);

if ('name' in codeit){
  console.log(`name 값은 ${codeit.name}입니다.`);
} else {
  console.log (`name 프로퍼티는 존재하지 않습니다.`);
}