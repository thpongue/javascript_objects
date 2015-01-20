console.log("------------");
console.log("playing around with javascript objects");

function iAmAnObject(){
	console.log('this function is an object');
	var value = "some value";
}

var instance = iAmAnObject();
var another_instance = iAmAnObject();

console.log("these 2 instances are pointers to the same thing:")
console.log(instance === another_instance);

console.log("instance.value will be undefined because it is (effectively) private:");
console.log(instance.value);
