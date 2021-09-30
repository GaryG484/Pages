//map() method
//The first technique we'll use to transform data is the map() method. The map()method in JavaScript
// applies a transformation to each element in an array. Like a for loop, it can perform an operation
// to every element of an array.
//Here is an example in which all the numbers of an array are doubled:
var numbers = [1,2,3,4,5];
var doubled = numbers.map(function(num){
    return num * 2;
});
console.log(doubled);

//In this code, an array named numbers contains five integers:var numbers = [1,2,3,4,5];. Let's break down the
//rest of the code in more detail:

//The numbers array calls the map()method.
//Inside the map() method, there is another function. This function is anonymous, meaning that the function 
//does not have a name. When map() is called, it in turn calls this anonymous function.
//The anonymous function takes a parameter, named num, and returns the number multiplied by 2. Its sole task
//is to perform this single action.
//For every element in the array, the map() method calls the anonymous function, which doubles the value
//of the element.
//The map()method returns an array of doubled values, which is assigned the variable doubled.

//In this example,map() is used to extract a specific property from each object in an array.
var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(function(city){
    return city.City;
});
console.log(cityNames);

//cities is an array of objects. Each object has multiple properties, such as Rank, City, and State.
//The map() method is used to extract only the City property of each object, i.e., San Antonio, Phoenix, 
//and Dallas. During each iteration, the anonymous function inside map() returns only that property of each
//object.
//cityNames is an array of only these city names.

//a for loop gives specific instructions on start and end points of the loop, map() does not. A for loop is 
//imperative, meaning that its code is more detailed on the specific operations involved in it.
//The map() method, on the other hand, is more abstract, and does not specify things such as stop and 
//end points.

//However, the map() method does something that a for loop does not always do: it calls another function.

//The filter() method**************************************************************************************
// Like map(), filter() performs an operation on every element in the original array. Unlike map(), 
//however, filter()does not necessarily return an array whose length is the same as the original array.

//The following example returns an array of integers that are larger than 1: [2,3,4,5]
var numbers = [1,2,3,4,5];

var larger = numbers.filter(function(num){
    return num > 1;
});

console.log(larger);

//The map() method transforms every element of the original array, and so the size of the transformed array is the same as that of the original array.

//The filter() method, on the other hand, returns an array of values that meet certain criteria. Values in 
//the original array that do not fulfill the condition are filtered out. In this case, specifically, the 
//anonymous function called by filter() returns true if an argument is larger than 1, and false if it does not.
//The filter() method runs the anonymous function on every element of the original numbers array. Only numbers 
//at are larger than 1 are returned: [2,3,4,5]. So whereas applying map() to the numbers array would have 
//returned an array with five elements, applying this specific filter returned an array of only four elements.

//Arrow Funtions ******************************************************************************
//The anonymous function inside map() and filter() can be simplified as an arrow function. Here's an example:
var numbers = [1,2,3,4,5];


var doubled = numbers.map(num => num * 2);
console.log(doubled);

//The map() method performs the identical operation as before: it doubles each element in the numbers array. 
//However, the anonymous function inside map() has been replaced by an arrow function.

var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);

//sortedAge returns the array [2,3,9,37,39]. Like map() and filter(), sort()takes in an anonymous function. 
//During each iteration, the anonymous function, an arrow function in this case, compares one element of
//the array (a) with another element in the array (b). From a, it subtracts b. If the result is negative 
//(i.e., b is larger than a) then it stays put. If the result of the subtraction is positive, the order of
//the two elements is reversed. Look at a modified version of this example:

var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((anElement,anotherElement) => anElement -
anotherElement);

//Let's break down this code.

//The variables a and b are replaced by anElement and anotherElement.
//The first two elements that are compared might be 3 and 2. The variable anElement is assigned to 3, and 
//anotherElement to 2.
//The arrow function performs the subtraction anElement - anotherElement, or 3 - 2.
//Since the result is positive (3 - 2 = 1), the order of the two numbers is reversed.
//The sort()method compares another pair of elements in the array, for example 37 and 39.
//Since 37 - 39 is a negative number, their ordering is kept.
//The process is repeated until the array is sorted.

//slice() method *****************************************************************************************
var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0,2);

//In this example, the slice()method returns the first two elements of the integer array: [0,1]. 
//The first argument is the position of where to begin the selection. Here, it is at index position 0. 
//The next argument, 2, denotes the position of the array where the slicing ceases. In other words, the
//slice()method begins selecting the array at index position 0, and stops right before reaching index 
//position 2. So here, it returns elements at index positions 0 and 1, but not 2.

//To slice to the end of an array, you can omit the second argument:
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
words.slice(3, );
//The elements sliced here are['orangutan', 'salamander']

