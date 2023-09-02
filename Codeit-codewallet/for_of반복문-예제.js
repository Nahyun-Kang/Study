//for...of

let influencer = ['suwanlog', 'small.tiger','Minam.ludens','cu_convenience24']

for (let i = 0 ; i < influencer.length; i++) {
  console.log(influencer[i])
}

for (변수 of 배열) {
  동작부분;
}

for (let element of influencer){
  console.log(element);
}

//for in 문으로도 찾을 수 있다.
for (let index in influencer){
  console.log(influencer[index]);
}

//but for in문은 객체에 최적화되어있기 때문에 배열에서는 for in문은 사용하지 않는 것을 권장