
function even(arr)
{
	for( var i= 0;i<=arr.length-1;i++)
	{				
        if(i%2==0)
        {
        	count++;
        }	
        console.log(count);
	}	
}
var a = even([10,12,16,15,1,13,7]);
console.log(even(a));