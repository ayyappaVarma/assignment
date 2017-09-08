function objCount(ab)
{
	var count = 0;
	for(var key in ab)
	{
		if((ab[key].y.indexOf(1)>-1) && (ab[key].y.indexOf(2)>-1))
		{
			count=count+1;
		}
	}
return count;
}
var a={a:{y:[1,2,3,4]},
		b:{y:[2,6,3,4]},
		c:{y:[6,1,2,9]}
	}
	console.log(objCount(a));