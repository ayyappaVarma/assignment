function evenOdd(arr)
{
	count = {even:0 ,odd:0};
for(var i = 0; i<=arr.length-1; i++)
{
	if(i%2 ==0)
	{
		count.even=count.even+1;
	}
	else
	{
		count.odd = count.odd+1;
	}
}
return count;
}
var a = ([1,2,2,3,4,5,3,6,2,3]);
console.log(evenOdd(a));