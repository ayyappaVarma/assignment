function maxnum(arr){
	var max = 0;
	for(var i = 0; i<arr.length; i++){
		if(arr[i]>max)
		{
			max = arr[i];
		}
	}
	return max;
}
var a = [1,2,3,45,5];
console.log(maxnum(a));