function keyCount(obj)
{
	var count = 0;
	for(var key in obj)
	{
		if(obj[key].indexOf(2)>-1)
		{
			count = count+1;
		}
	}
	return count;
}
var ab ={a:[1,2,3],
		b:[2,3,4],
		c:[5,6,7]
	};
	console.log(keyCount(ab));