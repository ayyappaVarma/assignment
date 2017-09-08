/if a's array in any value is equal to ob ,if it is true/
function equal(a,b){

	retobj = {};
	for(var i = 0;i<a.length;i++)
	{
		if(b===a[i])
		{
			retobj.val = true;
		}
	}
	return retobj;
}
    var a = [1,2,4,3];
    var b=4;
	console.log(equal(a,b));
