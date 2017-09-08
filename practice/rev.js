
function reverseString(str) {
	newString = " ";
	for(i=0;i<=str.length-1;i++)
	{
		newString = str[i]+newString;
	console.log(newString);
}
return newString;
}	

reverseString('anil');