let sum = 0.1 + 0.2 // 0.3 이 아니다.

// 컴퓨터는 0과 1로만 이루어진 코드로 이루어져있기 때문

//미세한 숫자가 오차로 발생

//오차를 해결하는 방법은

// toFixed 메소드를 활용하는 방법

console.log(Number(sum.toFixed(1)));
console.log(+sum.toFixed(1));
console.log(Math.round(sum*10)/10);

//// 여기에 코드를 작성하세요
function interestCalculator(rate, payment, term){
  console.log(+(payment * term * (term+1) / 2 * rate / 12 ).toFixed(0) );
}


// 이율이 4.3%일 때 매월 80만원씩 24개월 납입할 경우
interestCalculator(0.043, 800000, 24);

// 이율이 4.3%일 때 매월 60만원씩 24개월 납입할 경우
interestCalculator(0.043, 600000, 24);


//팰린드롬 

function isPalindrome(word) {
  // 여기에 코드를 작성하세요

  let doReverse = [...word].reverse().join('')
  if (word === doReverse) {
    return true;
  } else {
    return false;
  }

}

// 테스트 코드
console.log(isPalindrome("racecar"));
console.log(isPalindrome("stars"));
console.log(isPalindrome("기러기"));
console.log(isPalindrome("123321"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("kayak"));

function isPalindrome(word) {
  // 여기에 코드를 작성하세요
  i = 0
  while (i < Math.ceil(word.length / 2)){
    if (word[i] === word[word.length - i - 1]){
      i++;
    } else {
      return false;
    }
  }
  return true;
}

// 테스트 코드
console.log(isPalindrome("racecar"));
console.log(isPalindrome("stars"));
console.log(isPalindrome("기러기"));
console.log(isPalindrome("123321"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("kayak"));