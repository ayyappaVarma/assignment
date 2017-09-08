function array(arr)
{
	var out = [];
	for(var i=0;i<=arr.length-1;i++)
	{
		if((arr[i].name==="ayyappa") && (arr[i].details.indexOf(20) > -1))
		{	
			
				out.push(arr[i]);
		}		
	}
	return out;
}
var a= [{name:"sunil", details: [10, 25, 30]}, 
        {name:"ayyappa",details: [10, 20, 30]},
        {name:"chaitanya",details: [10, 20, 30]},
        {name:"sunil",details: [10, 20, 30]}];
 console.log(array(a));