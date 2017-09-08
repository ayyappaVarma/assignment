function objkey(p){
	for (var key in p) {
	  
	    console.log(key);
	  
	}
}

var p = {
    name: "david reddy",
    class: "VI",
    rollno: "12"
};
console.log(objkey(p));