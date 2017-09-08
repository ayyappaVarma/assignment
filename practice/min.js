function minnum(arr){
	var min=0;
	for(var i = 0; i<=arr.length; i++){
		if(arr[i]<min)
		{
			min = arr[i];
		}
	}
	return min;
}
var a = [10,2,3,45,5];
console.log(minnum(a));