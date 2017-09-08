function arrayIndex(arr)
{
	var count = 0;
	for(var i=0;i<arr.length;i++)
	{
		if(arr[i].indexOf(3)!==-1)
		{
			count = count+1;
		}
	}
	return count;

}
var a = [[1,2,1],
		 [8,4,5],
		 [5,6,3]];
		 console.log(arrayIndex(a));