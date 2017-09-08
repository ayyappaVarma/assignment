function arrayCount(arr)
{
	var count=0;
	for(var i = 0;i<arr.length; i++)
	{
		if((arr[i].details.indexOf("sunil") > -1) && (arr[i].age.indexOf(30)>-1))
		{
			count=count+1;
		}
	}
	return count;
}
var a = [{details:["sunil","ayyappa","varma"],age:[20,20,40]},
			{details:["xyz","abc","varma"],age:[20,20,30]},
			{details:["sunil","ayyappa","varma"],age:[20,20,30]}];

		console.log(arrayCount(a));
		