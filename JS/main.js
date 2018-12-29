// // console.log("connected");

// 4. 
// var cars = ["saab", "volvo", "honda", "lexus", "BMW"];
// console.log(cars.length);
// 5.
// for (var i=0; i < cars.length; i++){
// 	console.log(cars[i].length); 
// }
// 6.
// cars.reverse();
// 7.
// var copiedArray = function(someArray) {
// 	var newArray = [];
// 	for(var i=0; i < someArray.length; i++) {
// 		newArray.push(someArray[i]);
// 	}
// 	return newArray;
// };
// copiedArray(cars);

// var reversedArray = copiedArray(cars).reverse();
// 8.
// cars.sort();
// 9.
// var numArray = [12, 10, 19, 22, 67];
// // // numArray.sort(function(a, b){return a-b});
// // numArray.sort(function(a, b){return b-a});
// // 10.
// var animals = ["giraffe", "monkey", "dog"];
// // 11.
// animals.push("cat", "bird");
// // 12.
// animals.pop();
// // 13.
var person = [];
// 14. and 15.
function namesList() {
var item = document.getElementById("firstname").value
var text = document.createTextNode(item)
var newItem = document.createElement("ul")
newItem.appendChild(text)
document.getElementById("namesList").appendChild(newItem);

var seconditem = document.getElementById("lastname").value
var text = document.createTextNode(seconditem)
var newItem = document.createElement("ul")
newItem.appendChild(text)
document.getElementById("namesList").appendChild(newItem);
}