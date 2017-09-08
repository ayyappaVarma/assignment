function repeat(arr) {
  var i,
      len=arr.length,
      out=[],
      obj={};

  for (i=0;i<len;i++) {
    obj[arr[i]]=0;
  }
  for (i in obj) {
    out.push(i);
  }
  return out;
}
var a = [1,2,2,4,5,6,7,2,4,1,2,1,2,5,8];
console.log(repeat(a));