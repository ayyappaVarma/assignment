function uniqueChar(str)
{
	
	var uniq = "";
	for(var i=0;i<str.length;i++)
	{
		if(uniq.indexOf(str.charAt(i))==-1)
		{
			uniq =uniq+str[i];
		}
	}
	return uniq;
}
var ab = "thequickbrownfoxjumpsoverthelazydog";
console.log(uniqueChar(ab));