function upper(str){
	a=str.split(" ");
	//console.log(a);
	var b=[];
	for(i=0;i<a.length;i++){
		b.push(a[i].charAt(0).toUpperCase()+a[i].slice(1));
	}	 
	
	return b.join(" ");
}



var str='the quick brown fox';
console.log(upper(str));