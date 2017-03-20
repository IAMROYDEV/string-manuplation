var str = 'my name is santosh';
var noOfLet = 3;
var splitStr = str.toLowerCase().split(' ');
var totalLen = splitStr.length + 1;
if ((splitStr.length > 0) && (noOfLet < totalLen)) {
   for (var i = 0; i < splitStr.length; i++) {
       // You do not need to check if i is larger than splitStr length, as your for does that for you
       // Assign it back to the array
       splitStr[i] = splitStr[i].charAt(0).toUpperCase();   
   }
console.log(splitStr.splice(0, noOfLet).join(''));
} else {
console.log('hello done');
}