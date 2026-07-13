//parametrs function
 function area(length, breadth)
{
    var area = length * breadth;
    console.log("Area is: " + area);
}

area(5, 10);

//return function
function add(a, b)
{
    return a + b;
}
var sum = add(58,50);
console.log("Sum is: " + sum);

//conditional statement true
var finishedHomework = true;
if(finishedHomework)
{
    console.log("You can go out and play");
}
else
   {
    console.log("You cannot go out and play");
   }

//conditional statement false
var birthday=false;
if(birthday)
{
    console.log("It's your birthday! enjoy your day!");
}
else
{
    console.log("It's not your birthday.");

}

//logical operators
console.log(true && true&& false);
console.log(true || false);  
console.log(!true);  

var season = "summer";
var temperature = 9;

if (season === "summer" && temperature > 30) {
    console.log("It's hot outside");
}
else if (season === "winter" && temperature < 10) {
    console.log("It's cold outside");
}
else {
    console.log("The weather is moderate.");
}

//for loop
for (var i = 1; i <= 5; i++) {
    console.log("sarva");
}

for (var i = 1; i <= 5; i=i+2)
    {
        console.log(i);
    } 
//reverse order
for (var i = 5; i >= 1; i--) {
    console.log(i);
}

// table method
for (var i = 1; i <= 10; i++) {
    var result = 5 * i;
    console.log("5 x " + i + " = " + result);
}




