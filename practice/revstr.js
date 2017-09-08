
function reverseString(str) {
	newString = " ";
	for(i=str.length-1; i>=0;i--)
	{
		newString = newString+str[i];
	console.log(newString);
}
return newString;
}	

reverseString('anil');