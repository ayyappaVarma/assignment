function weekend(date)
{
	var dt = new Date (date);
	if((dt.getDay()===6)||dt.getDay()===0)
{
	return "weekend";
}
else {
	return "not a weekend";
}
}
console.log(weekend('sept9,2017'));