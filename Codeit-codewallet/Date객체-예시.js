// Date
let YourDate = new Date();

console.log(myDate);

let Date = new Date(1000);
// 1970년 1월 1일 00:00:00 UTC + 1000 밀리초 (1초)

let Date1 = new Date('2017-05-18');

let Date2 = new Date('2017-05-18T19:11:16'); //-> 대문자 T를 넣는다.

let Date3 = new Date(yyyy,mm,dd,hh,mm,ss,ms); //연도와 월까지는 필수고 나머지는 생략 가능
//month는 0부터 시작한다. 

Date4 = console.log(myDate.getTime())
//myDate객체가 1970년 1월 1일 00:00:00 UTC부터 몇 밀리초 지났는지? 알 수 있도록 도와주는
 //time stamp(타임스탬프)의 개념

//Date.getTime()
let myDate = new Date(2017, 4,18, 19, 11, 16);
let today = new Date();

let timeDiff = myDate.getTime() - today.getTime()

console.log(timeDiff + '밀리초');
console.log(timeDiff / 1000 + '초');
console.log(timeDiff / 1000 / 60 + '분')
console.log(timeDiff / 1000 / 60 / 60 + '시간')

console.log(myDate.getFullYear());
console.log(myDate.getMonth());
console.log(myDate.getDate()); // 일자
console.log(myDate.getDay()); // Day 요일 (일요일부터 0~6까지)
console.log(myDate.getHours())
console.log(myDate.getMinutes())
console.log(myDate.getSeconds())
console.log(myDate.getMilliseconds())

// 간단하게 시간 정보 알아내기
let simpleDate = new Date();

console.log(simpleDate.toLocaleDateString()); // myDate가 가진 날짜에 대한 정보 (년. 월. 일)
console.log(simpleDate.toLocaleTimeString()); // myDate가 가진 시간에 대한 정보 (시:분:초)
console.log(simpleDate.toLocaleString()); // myDate가 가진 날짜와 시간에 대한 정보 (년. 월. 일 시:분:초)


//date 객체의 정보 수정
let myDate = new Date(2017, 4, 18, 19, 11, 16);

myDate.setFullYear(2002);
myDate.setMonth(6);
myDate.setDate(20);



// date.now() 메소드는 이 메소드가 호출된 시점의 타임스탬프를 반환, 
// 새로운 객체를 만들지 않아도 바로 현 시점의 날짜 값을 얻어낼 수 있다.
let nowDate = new Date();


let typeDate = new Date(2017, 4, 18);

console.log(typeof typeDate); // object
console.log(String(typeDate)); // Thu May 18 2017 00:00:00 GMT+0900 (Korean Standard Time)
console.log(Number(typeDate)); // 1495033200000
console.log(Boolean(typeDate)); // true


console.log(Date.now() === myDate.getTime()); // true


// date 객체 끼리 사칙 연산도 가능하다.
let myDate1 = new Date(2017, 4, 18);
let myDate2 = new Date(2017, 4, 19);

let timediff = myDate2 - myDate1;
console.log(timediff); // 86400000 (ms)
console.log(timediff / 1000); // 86400 (sec)
console.log(timediff / 1000 / 60) // 1440 (min)
console.log(timediff / 1000 / 60 / 60) // 24 (hour)
console.log(timediff / 1000 / 60 / 60 / 24) // 1 (date)


let date1 = new Date('12/15/1999 05:25:30');
let date2 = new Date('December 15, 1999 05:25:30');
let date3 = new Date('Dec 15 1999 05:25:30');
