var fs = require('fs');
function readFile(x,cb){
	var retObj={};
	fs.readFile(x,function(err,contents){
		if(err){
			retObj.status = false;
			cb(retObj,"error");
		}
		else{
			retObj.status=true;
			retObj.length = contents.toString().length;
			cb(retObj,"hello");

		}
	});
}
readFile("/home/mtwlabs-05/Desktop/dev",function(a,b)
{
	console.log(a,b);

});