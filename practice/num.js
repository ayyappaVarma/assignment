console.log("printing all numbers divisible by 5 and 3 between 5 and 50");
var i = 5;
while(i<=50)
{
	if(i%5===0 && i%3===0)
	{
		console.log(i);
	}
	i+=1;
}