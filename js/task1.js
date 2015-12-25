/**
 * 
 */

var counter = 1;
var max_count = 1;
var arr=[3, 'a', 'a','a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]; 
for( var i = 0; i < arr.length-1; i++){
	var temp = arr[i]
	for (var j = 1; j < arr.length ; j++){
		
		if(temp == arr [j]){
			counter++;
		}
	}
	if (counter > max_count){
		var most_frequent_element = temp;
		max_count = counter;
		
	}
	counter = 0;
}
console.log("The element is: "+most_frequent_element);
console.log("And it occurs "+max_count +' '+'Times');