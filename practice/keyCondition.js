function keyCondition(obj)
{
	var a={};
	var count= 0;
	for(var i=0;i<obj.length;i++)
	{
		a=keyCondition[i];
		if((a.y && a.x) && (a.x<3 && a.y>3))
		{
			count=count+1;
		}
	}
	return count;
}
var a =[{x:1,y:2,z:3},
		{x:2,y:4,z:4},
		{y:4,z:10,x:5},
		{x:2,z:11}
       ]
       console.log(keyCondition(a));