//배열(Array)

let CourseRanking = [
  '자바스크립트 프로그래밍 기초',
  'Git으로 배우는 버전 관리',
  '컴퓨터 개론',
  '파이썬 프로그래밍 기초'
];

//배열 안에 있는 값들은 요소(element)라고 한다.
//index == PropertyName 배열의 요소들엔 순서가 매겨진다.

console.log(배열이름[index]); //인덱싱 
//인덱싱은 1부터 시작하는 것이 아니라 0부터 시작한다.

//ex
console.log(courseRanking[0])
console.log(courseRanking[2])
console.log(courseRanking[3])

//랭킹처럼 순서가 있는 값을 만들 때는 객체보다 배열을 만드는 것이 효율적이고 좋다.
// 순서가 있는 여러값들의 묶음은 다양하게 찾아볼 수 있다.

//ex)
//서울 공항철도 노선
let airportLines = ['인천공항 2터미널', '인천공항 1터미널', '검암', '계양']

//해리포터 시리즈
let harryPotterSeries = ['마법사의 돌', '비밀의 방', '아즈카반의 죄수', '불의 잔', '불사조 기사단', '혼혈왕자', '죽음의 성물'];

//십이지
let chineseZodiac = ['자', '축', '인', '묘'];

//십간
let tenHeavenlyStems = ['갑','을', '병', '정'];


