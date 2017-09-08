
var counter = 0;
var a=[];


for(var i = 0; i<=100; i++){
  if(i%2==0){
    if(a.length <5){
    a[counter] = i;
    counter++
    }else{
      console.log(a);
      a=[];
      counter=0;
      a[counter] =i;
    }
  }
  }
console.log(a);