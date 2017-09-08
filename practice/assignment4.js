function long(country)
{
	var longest=country[0];
	

	for(i=0;i<country.length;i++)
	{
		if(country[i].length>longest.length)
		{
			longest=country[i];
		}
	}
	return longest;
}

var country=["Australia", "Germany", "United States of America"]
console.log(long(country))