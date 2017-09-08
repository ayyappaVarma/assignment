function remove(str)
{
	string = " ";
	for(var i = 0;i<str.length-1;i++)
	{
		if(str[i] === "a"||
			str[i] ==="e"||
			str[i] ==="i"||
			str[i] ==="o"||
			str[i] ==="u")
		{
			continue;
		}
		else {
			string + = str[i];
		}
	}
	return string;
}
console.log(remove("programing language"));