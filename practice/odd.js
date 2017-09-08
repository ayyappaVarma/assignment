function odd(arr)
{
	var count = 0;
	for(var i=0;i<=arr.length-1;i++)
	{
		if(i%2!==0)
		{
			count=count+1;
		}	
	}
	return count;	
}
odd([1,3,7,11]);