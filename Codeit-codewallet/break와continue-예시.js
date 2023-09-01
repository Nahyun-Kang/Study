//break와 continue

for (let i = 1; i <=10 ;i++ ) {
  if (i % 2 ===0){
    continue;
    //동작을 건너 뛰게 함
  }
  console.log(i)
}

while(i <= 10 ) {
  if (i % 2 ===0) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}