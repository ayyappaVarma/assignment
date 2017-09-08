function uniqueValue(arr1,arr2)
{
	var out =[];
	for(var i=0;i<=arr1.length-1;i++)
	{
	for(var j=0;j<=arr2.length-1;j++)
	{
	if(arr1[i]===arr2[j])
	{
	   out.push (arr1[i]);
	}
	}
	}
     return out;
	}
	var arr1=[2,5,4,6,3];
	var arr2=[2,5,1,8,7];

console.log(uniqueValue (arr1,arr2));
