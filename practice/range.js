function range(val){
	if(val<=10)
	{
		return "1 to 10";
	}
	else if(val>11 && val<=20)
	{
		return "11 to 20";
	}
	else if(val>21 && val<=30)
	{
		return "21 to 30";
	}
	else if(val>31 && val<=40)
	{
		return "31 to 40";
	}
	else if(val>41 && val<=50)
	{
		return "41 to 50";
	}
	else if(val>51 && val<=60)
	{
		return "51 to 60";
	}
	else if(val>61 && val<=70)
	{
		return "61 to 70";
	}
	else
	{
		return "71 to 80";
	}
}
	var a = 40;
	console.log(range(a));
