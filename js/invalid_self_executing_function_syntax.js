console.log("------------");
console.log('this invalid self executing function should not execute');
function(){
	console.log("this won't be logged");
}();
