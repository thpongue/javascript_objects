console.log("prototypes allow us to create multiple instance of a function object");

function iAmAnObject(){
	console.log('this function is an object');
	var value = "some value";
}

var instance = new iAmAnObject();
var another_instance = new iAmAnObject();


console.log("these 2 instances are pointers to two different things:")
console.log(instance === another_instance);
