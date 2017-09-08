

function arrayKey(obj){
var out= [];

	for(var key in obj){


		if(obj[key].indexOf(6)>-1){

			//out.push(key,obj[key]);//to display key and object	
			out.push(key);
		}
		
	}
	return out;
}
var arr = {
	a:[1,2,3,],	 
	b:[3,4,5,],
	c:[4,5,6]
};
console.log(arrayKey(arr));