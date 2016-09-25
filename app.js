/*Assignment Write a JavaScript function  findSum () . This function should find sum of numbers passed to it using arguments array and return the sum. 
*/

function  findSum(){ //accepting parameter radius

//find the number of arguemnts passed to the function
var no_of_args = arguments.length;

var i, sum=0;
//iterating through arguments array and finding sum
for (i=0;i<no_of_args;i++) 
	sum+= arguments[i];
return sum;

}

//calling findsum(0 with different parameters)
console.log ("This is findsum 1,2,3 ="+findSum(1,2,3));
console.log("This is findsum 1,2,3,4,5,6,7,8,9,10 = "+findSum(1,2,3,4,5,6,7,8,9,10));
