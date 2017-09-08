function keyCount(fj)
{
 var count = 0;
 for(var key in fj)
 {
 	if(fj[key].indexOf(3)>-1)
 	{
 		count =count+1;
 	}
 }
 return count;
}
var a = {a:[1,2,3],
		 b: [2,3,4],
		  c:[5,6,7]

		  };
		  console.log(keyCount(a));
