// CHAPTER # 1

//Task 1

//1.Write a script to greet your website visitors using JS alert box
alert("Welcome! Sir")

//Task 2

//2. Write a script to display following message on your web page:
alert("Error! Please enter a valid password")

//Task 3

//3. Write a script to display following message on your web page: (Hint: Use line break)
alert("Welcome to JS Land...\nHappy Coding!")

//Task 4

//4. Write a script to display following message in sequence
var box;
alert("Welcome to JS Land...");

alert("Happy Coding\nPrevent this page from creatng additional dialogs");

//Task 5

//5. Generate the following message through browser's developer console:
alert("Hello... I can run JS through my web browser's console");
console.log("Hello... I can run JS through my web browser's console");


//CHAPTER # 2

//Task 1

//1. Declare a variable called Username
document.write("Declare a variable called Username")
var username;

//Task 2

//2. Declare a variable called myName & assign to it a string that represents your full name
document.write("Declare a variable called myName & assign to it a string that represents your full name")
var myName = 'Muhammad Sameer';

//Task 3

/*3. Write script to
                            a) Declare a JS variable, titled message
                            b) Assign "HELLO WORLD" to varibale message
                            c) Display the message in alert box*/

var message = 'Hello World'
alert(message);

//Task 4

//4. Write a script to save students'bio data in JS variable and show the data in alert boxes
var myName = 'Muhammad Sameer';
alert(myName);
alert("20 years old");
alert("Certified Mobile Application Development");

//Task 5

//5. Write a script to display the following alert using one JS variable:

var a = "PIZZA";
alert("PIZZA\nPIZZ\nPIZ\nPI\nP");

//Task 6

//6. Declare a variable called email and assign to it a string that represents your Email Address (e.g. example@example.com). Show the blow mentioned message in an alert box. (Hint: use string concatenation)
var email = "muhammadsameer.css@gmail.com";
alert("My email address is " + email);

//Task 7

//7. Declare a variable called book and give it the value "A smarter way to learn JavaScript". Display the following message in an alert box.
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " + book);

//Task 8

//8. Write a script to display this in brwoser through JS
document.write("Yah! I can write HTML content through JavaScript <br> <br>");

//Task 9

//9. Store following string in a variable and show in alert and browser through JS
var end = "---------ஜ۩۞۩ஜ---------";
alert(end);
document.write(end + "<br>");

//CHAPTER # 3

//Task 1

//1. Declare a variable called age and assign to it your age. Show your age in an alert box
var age = 20;
alert("I am " + age + " years old");

//Task 2

//2. Declare and initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of vists on your web page. For example: "You have visited this site N times"
var time = 0;
var a = 'We are exit now';
for (var i = 1; i > 0; i++) {
    let v = confirm(a);
    if (v == true) {
        time = time + 1;
        alert("You have visited this site " + time + " times")
        break;

    } else if (v == false) {
        time = time + 1
        alert("You have visited this site " + time + " times")
    }
}

//Task 3

//3. Declare a varaible called birthYear & assign to it your birth year. Show the following message in your browser
var birthYear = 2000;
document.write("My birth year is " + birthYear + "<br>Data type of my declared variable is number <br><br><br>");

//Task 4

/*4. A visitor visits an online clothing store 
                            www.xyzClothing.com . Write a script to store in variables 
                            the following information: 
                            a. Visitor’s name
                            
                            b. Product title
                            
                            c. Quantity i.e. how many products a visitor wants to order
                            
                            Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.*/

alert("Welcome to www.xyzClothing.com")
var Visitor = prompt("What is your name?", "Guest");
var product = prompt("Which type of Product you see here?", "Shoes");
var Quantity = prompt("How many products you wants to order?");
document.write(Visitor + " ordered " + Quantity + " " + product + " on XYZ Clothing store");

//CHAPTER # 4

//Task 1

//1. Declare 3 variables in one statement.
document.write("Declare 3 variables in one statement")
var letter = "letter",
    $ = "$",
    _ = "_";

//Task 2

//2. Declare 5 legal & 5 illegal variable names.
document.write("Declare 5 legal & 5 illegal variable names")
var var1 = 'name';
var var2 = '_name';
var var3 = 'name1';
var var4 = '$name';
var var5 = 'name_32';
var var6 = "keywords";
var var7 = "2name";
var var8 = "name@";
var var9 = "name%";
var var10 = "5_name";

//Task 3

//3. Display this in your browser
//              a)  A heading stating “Rules for naming JS variables” 
//            b)  Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable 
//          c) Variables must begin with a ______, ______ or _____. For example $name, _name or name 
//        d) Variable names are case _________ 
//      e) Variable names should not be JS _________
var letter = "letter",
    $ = "$",
    _ = "_";

var var1 = 'name';
var var2 = '_name';
var var3 = 'name1';
var var4 = '$name';
var var6 = "keywords";
document.write("A heading stating “Rules for naming JS variables” <br>Variable names can only contain" + var1 + ", " + var2 + ", " + var3 + " and " + var4 + ".For example $my_1stVariable <br>Variables must begin with a " + letter + ", " + $ + " or " + _ + ".For example $name, _name or name <br>Variable names are case sensitive <br>Variable names should not be JS " + var6);

//CHAPTER # 5

//Task 1

//1.Write a program that take two numbers & add them in a new variable. Show the result in your browser.

var num1 = +(prompt("Enter first number"));
var num2 = +(prompt("Enter second number"));
var result = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + result);

//Task 2

//2. Repeat task1 for subtraction, multiplication, division & modulus.

var num1 = +(prompt("Enter first number"));
var num2 = +(prompt("Enter second number"));
var sum, subtraction, multiplication, division, modulus;

sum = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + sum);
subtraction = num1 - num2;
document.write("Subtraction of " + num1 + " and " + num2 + " is " + subtraction);
multiplication = num1 * num2;
document.write("Multiplication of " + num1 + " and " + num2 + " is " + multiplication);
division = num1 / num2;
document.write("Division of " + num1 + " and " + num2 + " is " + division);
modulus = num1 % num2;
document.write("Modulus of " + num1 + " and " + num2 + " is " + modulus);

//Task 3

/*3. Do the following using JS Mathematic Expressions 
                a. Declare a variable.
                 
                b. Show the value of variable in your browser like “Value 
                after variable declaration is: ??”.
                c. Initialize the variable with some number.
                 
                d. Show the value of variable in your browser like “Initial 
                value: 5”. 
                e. Increment the variable.
                 
                f. Show the value of variable in your browser like “Value 
                after increment is: 6”.
                 
                g. Add 7 to the variable. 
                h. Show the value of variable in your browser like “Value 
                MATH EXPRESSIONS| JAVASCRIPT
                after addition is: 13”. 
                i. Decrement the variable.
                 
                j. Show the value of variable in your browser like “Value 
                after decrement is: 12”.
                 
                k. Show the remainder after dividing the variable’s value 
                by 3.  
                l.
                Output : “The remainder is : 0”.*/

var a;
document.write("<br>Value after variable declaration is " + a);
var b = 5;
document.write("<br>Initial value: " + b);
b = b + 1;
document.write("<br>Value after increment is: " + b);
b = b + 7;
document.write("<br>Value after addition is: " + b);
b = b - 1;
document.write("<br>Value after decrement is: " + b);
b = b % 3;
document.write("<br>The remainder is : " + b);

//Task 4

/*4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie*/

var ticket = 600;
var buying = +(prompt("How many tickets you want to buy?"));
var cost;
cost = ticket * buying;
document.write("<br>Total Cost to buy " + buying + " tickets to a movie is " + cost + "PKR");

//Task 5

//5.Write a script to display multiplication table of any number in your browser. E.g
var a = prompt("Enter any number");
document.write("Table of " + a + "<br>");
document.write(a + "X 1 = " + a * 1 + "<br>");
document.write(a + "X 2 = " + a * 2 + "<br>");
document.write(a + "X 3 = " + a * 3 + "<br>");
document.write(a + "X 4 = " + a * 4 + "<br>");
document.write(a + "X 5 = " + a * 5 + "<br>");
document.write(a + "X 6 = " + a * 6 + "<br>");
document.write(a + "X 7 = " + a * 7 + "<br>");
document.write(a + "X 8 = " + a * 8 + "<br>");
document.write(a + "X 9 = " + a * 9 + "<br>");
document.write(a + "X 10 = " + a * 10 + "<br>");

//Task 6

//6.The temperature converter: Its hot out! Let's make a converter based on the steps here.
//a. Store a Celsius temperature into a variable
//b. Convert into Fahrenheit and output "NN°C is NN°F"
//c. Store a Fahrenheit temperature into a variable
//b. Convert into Celsius and output "NN°F is NN°C"
let a = +(prompt("Enter the value of Celsius Temperature"));
let F = (a * 9 / 5) + 32;
let b = +(prompt("Enter the value of Fahrenheit Temperature"));
let C = (b - 32) * 5 / 9;
document.write(a + "°C is " + F + "°F<br>");
document.write(b + "°F is " + C + "°C<br>");

//Task 7

//7.Write a program to implement to checkout process of a shopping cart system for an e-commerce website.
//Store the following in variables
//a. Price of item 1
//b. Price of item 2
//c. Ordered quantity of item 1
//d. Ordered quantity of item 1
//e. Shipping Charges
//Compute the total cost & show the receipt in your browser.

var item1 = +(prompt("Enter Price of item 1"));
var item2 = +(prompt("Enter Price of item 2"));
var Ordered1 = +(prompt("Enter ordered quantity of item 1"));
var Ordered2 = +(prompt("Enter ordered quantity of item 2"));
var ShippingCharges = 100;
let result1 = item1 * Ordered1;
let result2 = item2 * Ordered2;
let cost = result1 + result2 + ShippingCharges;
document.write("<h1>Shopping Cart</h1>");
document.write("Price of item 1 is " + item1 + "<br>");
document.write("Quantity of item 1 is " + Ordered1 + "<br>");
document.write("Price of item 2 is " + item2 + "<br>");
document.write("Quantity of item 2 is " + Ordered2 + "<br>");
document.write("Shipping Charges " + ShippingCharges + "<br><br>");
document.write("Total cost of your order is " + cost);

//Task 8

//8. Store total marks and marks obtained by a student in 2 variables. Compute the percentage
//& show the result in your browser

var TM = +(prompt("Enter Total Marks of Student"));
var OM = +(prompt("Enter Obtained Marks of Student"));
document.write("<h1>Marks Sheet</h1>");
document.write("Total Marks: " + TM + "<br>");
document.write("Obtained Marks: " + OM + "<br>");
var per = (OM / TM) * 100;
document.write("Percentage: " + per + "%<br>");

//Task 9

//9. Assume we have 10 US Dollars & 25 Saudi Riyals. Write a script to convert the total currency the total currency to Pakistani Rupees.
//Perform all calculations in a single expression.
//(Exchange rates: 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)

document.write("<h1>Currency in PKR</h1>");
let Dollar = 10;
let Saudi_Riyal = 25;
let Exchange1 = 104.80 * Dollar;
let Exchange2 = 28 * Saudi_Riyal;
let cost = Exchange1 + Exchange2;
document.write("Total currecny in PKR: " + cost);

//Task 10

//10. Write a program to initialize a variable with some number and do arithmetic in following sequence.
//a. Add 5
//b. Multiply by 10
//c. Divide the result by 2
//performe all calculation in a single expression

let a = 7;
b = (a + 7) * 10 / 2;
document.write(b);

//Task 11

//11.The Age Calculator: Forgot how old someone is?
//Calculate it!
//a. Store the current year in a variable
//b. Store their birth year in a variable
//c. Calculate their two possible ages based on the stored values.
//  Output them ot the screen like so: "They are either NN or NN years old"

document.write("<h1>Age Calculator</h1>");
let CY = +(prompt("Enter the current year"));
document.write("Current Year: " + CY + "<br>")
let BY = +(prompt("Enter the birth year"));
document.write("Birth Year: " + BY + "<br>")
let age = CY - BY;
document.write("Your age is: " + age);

//Task 12

//12. The Geometrizer: Calculate properties of a circle
//a. Store a radius into a variable
//b. Calculate the circumference based on the radius, and output "The circumference is NN"
//Calculate the area based on the radius, and output "The area is NN"

document.write("<h1>The Geometrizer</h1>");
const pie = 3.142;
let radius = +(prompt("Enter a value of radius"));
document.write("Radius of a circle is: " + radius + "<br>");
let circumference = 2 * pie * radius;
document.write("The Circumference is: " + circumference + "<br>");
let area = pie * radius * radius;
document.write("The Area is: " + area + "<br>");

//Task 13

//13.The Life Time Supply Calculator: Ever wonder how much a "lifetime supply" of your favourite snack is?
//Wonder no more.
//a. Store your favourite snack into a variable
//b. Store your current age into a variable
//c. Store your maximum age into a variable
//d. Store an estimated amount per day (as a number).
//e. Calculate how many would you eat total for the rest of your life.
//Output the result to the screen like so: "You will need NNNN to last you until the ripe old age of NN"

document.write("<h1>The Life Time Supply Calculator</h1>");
let favouriteSnacks = prompt("Enter your favourite snack");
document.write("Favourite Snacks: " + favouriteSnacks + "<br>");
let currentAge = +(prompt("Enter your Current age"));
document.write("Current Age: " + currentAge + "<br>");
let maximumAge = +(prompt("Enter your Maximum Age"));
document.write("Estimated Maximum Age: " + maximumAge + "<br>");
let estimatedAmount = +(prompt("Enter your estimated amount per day"));
document.write("Amount of snacks per day: " + estimatedAmount + "<br>");
let total, a, b;
a = maximumAge - currentAge;
b = a * 365;
total = b * estimatedAmount;
document.write("You will need " + total + " to last you until the ripe old age of " + maximumAge);

//CHAPTER # 6 to 9

//Task 1

/*1.Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:*/

var a = prompt("Enter the value of a");
document.write("Results: <br>The value of a is: " + a + "<br>............................................... <br>")

a = ++a;
document.write("<br>The value of ++a is: " + a);
document.write("<br>Now the value of a is: " + a);
document.write("<br> <br>The value of a++ is: " + a);
a++;
document.write("<br>Now the value of a is: " + a);
a = --a;
document.write("<br> <br>The value of --a is: " + a);
document.write("<br>Now the value of a is: " + a);
document.write("<br> <br>The value of a-- is: " + a);
a--;
document.write("<br>Now the value of a is: " + a);


//Task 2

//2. What will be the output in variables a,b & result after execution of the following script:
//var a = 2, b =1;
//var result = --a - --b + ++b  + b--;
//Explain the output at each stage:
//--a: 1;
//--a - --b: 0;
//--a - --b + ++b: 0; 
//--a - --b + ++b + b--: -1;


var a = 2,
    b = 1;
/*x = --a;
document.write("<br>The value of --a is: " + x);
y = --a - --b;
document.write("<br>The value of --a - --b is: " + y);
z = --a - --b + ++b;
document.write("<br>The value of --a - --b + ++b is: " + z);
w = --a - --b + ++b + b--;
document.write("<br>The value of --a - --b + ++b + b-- is: " + w);*/
var result = --a - --b + ++b + b--;
document.write("<br>The value of a is: " + a);
document.write("<br>The value of b is: " + b);
document.write("<br>Result is: " + result);

//Task 3

//3. Write a program to takes input a name from user & greet the user.
var name = prompt("Enter Your Name");
alert("Welcome to " + name);
document.write("Welcome to " + name);

//Task 5

//5. Write a program to take input a number from user & display it's multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should  be displayed by default
var num = +(prompt("Enter any number", "5"));
document.write("Table of " + num + "<br>")
for (var i = 1; i <= 10; i++) {
    document.write(num + " X " + i + " = " + num * i + "<br>");
}

//Task 6

//  6. Take:
//  a) Take three subjects name from user and store them in 3 different variables
//  b) Total marks for each subject is 100, store it in another variable
//  c) Take obtained marks for first subject from user and stored it in different variables
//  d) Take obtained marks for remaining 2 subjects from user and stored them in variables
//  e) Now calculate total marks and percentage and show the result in browser like  this. (Hint: user table)

var sub1 = prompt("Enter Your First Subject Name");
var sub2 = prompt("Enter Your Second Subject Name");
var sub3 = prompt("Enter Your Third Subject Name");
var TM = 100;
var ob1 = +(prompt("Enter Obtained Marks of First Subject"));
var ob2 = +(prompt("Enter Obtained Marks of Second Subject"));
var ob3 = +(prompt("Enter Obtained Marks of Third Subject"));
var per1, per2, per3, PER, OB, TM;
per1 = (ob1 / TM) * 100;
per2 = (ob2 / TM) * 100;
per3 = (ob3 / TM) * 100;
OB = ob1 + ob2 + ob3;
PER = (OB / 300) * 100;

document.write("<table> <tr> <th>Subject</th> <th>Total Marks</th> <th>Obtained Marks</th> <th>Percentage</th> </tr> <tr> <td>" + sub1 + "</td> <td>" + TM + "</td> <td>" + ob1 + "</td> <td>" + per1 + "%</td> </tr> <tr> <td>" + sub2 + "</td> <td>" + TM + "</td> <td>" + ob2 + "</td> <td>" + per2 + "%</td> </tr> <tr> <td>" + sub3 + "</td> <td>" + TM + "</td> <td>" + ob3 + "</td> <td>" + per3 + "%</td> </tr> <tr> <td> </td> <th>" + 300 + "</th> <th>" + OB + "</th> <th>" + PER + "%</th>  </tr> </table>");

//CHAPTER # 9 TO 11

//Task 1

//1. Write a Program to take 'city' name as input from user. If user enter "Karachi" Welcome the user like this:
//"Welcome to city of lights"

var city = prompt("Enter City Name").toUpperCase(city);
if (city === "KARACHI") {
    alert("Welcome to city of lights");
    document.write("Welcome to city of lights");
} else {
    alert("Welcome to " + city);
    document.write("Welcome to " + city);
}

//Task 2

//2. Write a program to take "gender" as input from user. If the user is male, give the message: Good Morning Sir.
// If the user is female, give the message: Good Morning Ma'am

var gender = prompt("What is your gender?\nMale or Female").toLowerCase(gender);
if (gender === "male") {
    alert("Good Morning Sir");
    document.write("Good Morning Sir");
} else if (gender === "female") {
    alert("Good Morning Ma'am");
    document.write("Good Morning Ma'am");
} else {
    alert("Wrong Gender")
}

//Task 3

//3. Write a program to take input color of road traffic signal from the user & show the message:
var color = prompt("Which color you see of traffic signal?").toLowerCase(color);
if (color === 'red') {
    alert("Must Stop");
} else if (color === "yellow") {
    alert("Ready to move");
} else if (color === "green") {
    alert("Move now");
} else {
    alert("Wrong Color! Please try again")
}

//Task 4

//4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres,
//show the message “Please refill the fuel in your car”

var remainingfuel = +(prompt("How many reamining fuel in your car (in litres)"));
if (remainingfuel < 0.25) {
    alert("Please refill the fuel in your car");
    document.write("Please refill the fuel in your car");
} else {
    alert("I think you can go with this fuel in any near fuel station");
    document.write("I think you can go with this fuel in any near fuel station");
}

//Task 5

//5. Run this script, & check whether alert message would be displayed or not. Record the outputs.
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true"); //this conditions is not true
}
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true"); //this conditions is not true
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true"); //this conditions is not true
}
if (c === 14) {
    alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
if (true) {
    alert("True");
}
if (false) {
    alert("False"); //this conditions is not true
}
if ("car" < "cat") {
    alert("car is smaller than cat");
}

//Task 6

//6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting
//percentage on your page. Take percentage & compute grade as per following table: 

var ob1 = +(prompt("Enter the obtained marks of first subject"));
var ob2 = +(prompt("Enter the obtained marks of second subject"));
var ob3 = +(prompt("Enter the obtained marks of third subject"));
var TM = 300;
var OB = ob1 + ob2 + ob3;
var per;
per = (OB / TM) * 100;
per = per.toFixed(2)
if (per >= 80) {
    document.write("<center><h1>Marks Sheet</h1> <br><br>Total Marks: 300 <br>Marks Obtaiend:" + OB + "<br>Percentage: " + per + "%<br>Grade: A-one<br>Remarks: Excellent</center>")
} else if (per >= 70) {
    document.write("<center><h1>Marks Sheet</h1> <br><br>Total Marks: 300 <br>Marks Obtaiend:" + OB + "<br>Percentage: " + per + "%<br>Grade: A<br>Remarks: Good</center>")
} else if (per >= 60) {
    document.write("<center><h1>Marks Sheet</h1> <br><br>Total Marks: 300 <br>Marks Obtaiend:" + OB + "<br>Percentage: " + per + "%<br>Grade: B<br>Remarks: You need to improve</center>")
} else if (per < 60) {
    document.write("<center><h1>Marks Sheet</h1> <br><br>Total Marks: 300 <br>Marks Obtaiend:" + OB + "<br>Percentage: " + per + "%<br>Grade: Fail<br>Remarks: Sorry</center>")
}

//Task 7

//7. Guess game: 
//Store a secret number (ranging from 1 to 10) in a variable.Prompt user to guess the secret number. 
//a. If user guesses the same number, show “Bingo! Correct answer”.
//b. If the guessed number +1 is the secret number, show 
//“Close enough to the correct answer”

var n = 7;
var num = +(prompt("Enter a Guess number"));
if (num === n) {
    alert("Bingo! Correct Answer");
    document.write("Bingo! Correct Answer");
} else if (num > n) {
    alert("Close enough to the correct answer try to lower number");
    document.write("Close enough to the correct answer try to lower number");
} else {
    alert("Close enough to the correct answer try to higher number");
    document.write("Close enough to the correct answer try to higher number");

}

//Task 8

//8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number
//is divisble by 3

var num = +(prompt("Enter the number to check it is divisible by 3"));
var check = num % 3;
if (check === 0) {
    alert(num + " is divisble by 3");
} else {
    alert(num + " can not be divisible by 3")
}

//Task 9

//9. Write a program that checks whether the given input is an even number or an odd number.

var num = +(prompt("Enter the number"));
var check = num % 2;
if (check === 0) {
    alert(num + " is even number");
} else {
    alert(num + " is odd number");
}

//Task 10

//10. Write a program that takes temperature as input and shows a message based on following criteria 
//a. T > 40 then “It is too hot outside.” 
//b. T > 30 then “The Weather today is Normal.” 
//c. T > 20 then “Today’s Weather is cool.” 
//d. T > 10 then “OMG! Today’s weather is so Cool.”

var T = +(prompt("Enter Weather Temperature"));
if (T > 40) {
    document.write("It is too hot outside");
} else if (T > 30) {
    document.write("The weather today is Normal");
} else if (T > 20) {
    document.write("Today's Weather is cool");
} else if (T > 10) {
    document.write("OMG! Today's weather is so cool");
} else {
    document.write("Its very cool weather")
}

//Task 11

//11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
//a. First number
//b. Second number
//c. Operation (+, -, *, /, %) 
//Compute & show the calculated result to user

var num1 = +(prompt("Enter First Number"));
var num2 = +(prompt("Enter Second Number"));
var op = prompt("Choose your operation\n(+, -, *, /, %)");
var result;
if (op === "+") {
    result = num1 + num2;
    document.write("Result is: " + result);
} else if (op === "-") {
    result = num1 - num2;
    document.write("Result is: " + result);
} else if (op === "*") {
    result = num1 * num2;
    document.write("Result is: " + result);
} else if (op === "/") {
    result = num1 / num2;
    document.write("Result is: " + result);
} else if (op === "%") {
    result = num1 % num2;
    document.write("Result is: " + result);
} else {
    alert("Invalid Operator");
}

//CHAPTER # 12 TO 13

//Task 1

//1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a
//number, uppercase letter or lower case letter. (Hint: ASCII codes:-A=65, Z=90, a=97, z=122).
var character = prompt("Enter any character");
var c = character.charCodeAt(0);
alert(c);

//Task 2

//2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal
var num1 = +(prompt("Enter first integer"));
var num2 = +(prompt("Enter second integer"));
if (num1 > num2) {
    document.write(num1 + " is larger number");
} else if (num2 > num1) {
    document.write(num2 + " is larger number");
} else if (num1 === num2) {
    document.write("Both integers are equal");
}

//Task 3

//3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.
var num = +(prompt("Check your number is positive or negative?"));
if (num > 0) {
    document.write("Number is positive");
}
if (num < 0) {
    document.write("Number is negative");
}
if (num === 0) {
    document.write("Number is zero");
}

//Task 4

//4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
var character = prompt("Enter one alphabate");
if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
    document.write("True");
} else {
    document.write("False");
}

//Task 5

//5. Write a program that 
//a. Store correct password in a JS variable. 
//b. Asks user to enter his/her password 
//c.Validate the two passwords: 
//  i. Check if user has entered password. If not, then give message “ Please enter your password” 
//ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show 
//“Incorrect password” otherwise.

var password = "Python_Programmer";
var a = prompt("Enter Your Password");
if (password == a) {
    alert("Correct! The Password you entered matches the original password");
} else if (a == false) {
    alert("Please Enter Your Password")
} else if (password != a) {
    alert("Incorrect password");
}

//Task 6

//6. This if/else statement does not work. Try to fix it:
//var greeting;
//      var hour = 13; 
//if (hour < 18) { 
//greeting = "Good day"; 
//else

//greeting = "Good evening"; 
//}
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
    alert(greeting);
    document.write(greeting);
} else {
    greeting = "Good evening";
    alert(greeting);
    document.write(greeting);
}

//Task 7

//7. Write a program that takes time as input from user in 24 hours clock format like:
//1900 = 7pm. Implement the following case using if, else & else if statements
var time = +(prompt("Enter Time like this format 1900"));
if (time >= 0000 && time < 1200) {
    alert("Good Morning");
} else if (time >= 1200 && time < 1700) {
    alert("Good afternoon");
} else if (time >= 1700 && time < 2100) {
    alert("Good evening");
} else if (time >= 2100 && time <= 2359) {
    alert("Good night");
}

//CHAPTER # 14 TO 16

//Task 1

//1.Declare an empty array using JS literal notation to store student names in future.

var studentArray = [];
studentArray.push("Sameer", "Emad", "Subhan") //new student names write here and then automatically add in array
document.write(studentArray);

//Task 2

//2. Declare an empty array using JS object notation to store student names in future.
var studentArray = {}
document.write(studentArray);
console.log(studentArray);

//Task 3

//3.Declare and initialize a strings array.
document.write("Declare and initialize a strings array")

let employeeNames = ['Sameer', 'Emad', 'Saim', 'Azhar', 'Ahmar'];
console.log(employeeNames);

//Task 4

//4.Declare and initialize a number array.
document.write("Declare and initialize a number array");

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(number);

//Task 5

//5.Declare and initialize a boolean array.
document.write("Declare and initialize a boolean array");

let booleanArray = [true, false];
console.log(booleanArray);

//Task 6

//6.Declare and initialize a mixed array.
document.write("Declare and initialize a mixed array");
let mixedArray = [true, false, 0, 5, 9, 7, 4, 3, 'Sameer', 'Emad', 'Saim', 'Azhar', 'Ahmar'];
console.log(mixedArray);

//Task 7

//7.Declare and Initialize an array and store available education qualifications in Pakistan(e.g.SSC, HSC, BCS,
//BS, BCOM, MS, M.Phil., PhD).Show the listed qualifications in your browser like:

let educationArray = ["SSC", "HSC", 'BCS', 'BS', "BCOM", 'MS', 'M.Phill', 'PhD'];
document.write("<h2>Qualification:</h2><br>1) " + educationArray[0] + "<br>2) " + educationArray[1] + "<br>3) " + educationArray[2] + '<br>4) ' + educationArray[3] + "<br>5) " + educationArray[4] + "<br>6) " + educationArray[5] + "<br>7) " + educationArray[6] + "<br>8) " + educationArray[7]);

//Task 8

//8.Write a program to store 3 student names in an array.Take another array to store score of these three students.
//Assume that total marks are 500 for each student, display the scores & percentages of students like:

let studentNames = [];
studentNames[0] = prompt("Enter First Student Name");
studentNames[1] = prompt("Enter Second Student Name");
studentNames[2] = prompt("Enter Third Student Name");
console.log(studentNames);
let scoreArray = [];
scoreArray[0] = prompt("Enter " + studentNames[0] + " score");
scoreArray[1] = prompt("Enter " + studentNames[1] + " score");
scoreArray[2] = prompt("Enter " + studentNames[2] + " score");
console.log(scoreArray);
let TM = 500;
let per1 = (scoreArray[0] / TM) * 100;
let per2 = (scoreArray[1] / TM) * 100;
let per3 = (scoreArray[2] / TM) * 100;
document.write("<h1>Score of " + studentNames[0] + " is " + scoreArray[0] + ". Percentage: " + per1 + "%<br></h1>");
document.write("<h1>Score of " + studentNames[1] + " is " + scoreArray[1] + ". Percentage: " + per2 + "%<br></h1>");
document.write("<h1>Score of " + studentNames[2] + " is " + scoreArray[2] + ". Percentage: " + per3 + "%<br></h1>");

//Task 9

//9.Initialize an array with color names. Display the array elements in your browser. 
//a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. 
//Display the updated array in your browser. 
//b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the 
//updated array in your browser. 
//c. Add two more color to the beginning of the array. Display the updated array in your browser.
//d. Delete the first color in the array. Display the updated array in your browser. 
//e. Delete the last color in the array. Display the updated array in your browser. 
//f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired 
//position/index. . Display the updated array in your browser.
//g.Ask the user at which index he / she wants to delete color(s) & how many colors he / she wants to delete.Then
//remove the same number of color(s) from user-defined position/index.Display the updated array in your browser.
let colorNames = [];
colorNames[0] = prompt("What color you wants to add to the beginning?");
document.write(colorNames[0] + ",");
colorNames[1] = prompt("What color you wants to add to the end?");
document.write(colorNames[1] + "<br>");
let a = prompt("Add one more color to the beginning of the array");
let b = prompt("Add one more color to the beginning of the array");
colorNames.unshift(b);
colorNames.unshift(a);
document.write(colorNames + "<br>");
colorNames.shift(colorNames);
document.write(colorNames + "<br>");
colorNames.pop(colorNames);
document.write(colorNames + "<br>");
let indexNumber = +(prompt("Which index you wants to add a color"));
let Color = prompt("Which color you wants to add a index");
colorNames[indexNumber] = Color;
document.write(colorNames + "<br>");
let c = +(prompt("Which index you wants to delete color(s)?"));
let d = +(prompt("How many colors you wants to delete?"));
colorNames.splice(c, d);
document.write(colorNames);

//Task 10

//10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
let studentScore = [320, 230, 480, 120];
document.write("Scores of Students: " + studentScore);
studentScore.sort();
document.write("<br>Orderd Scores of Students: " + studentScore);

//Task 11

//11. Write a program to initialize an array with city names Copy 3 array elements from cities array to selectedCities 
//array.
let cities = ["Karachi", 'Lahore', 'Islamabad', 'Quetta', 'Peshawar'];
let selectedCities;
document.write("<h3>Cities List:</h3>" + cities + "<br><br>");
selectedCities = cities.slice(2, 4);
document.write("<h3>Selected Cities List:</h3>" + selectedCities);

//Task 12

//12. Write a program to create a single string from the below mentioned array: 
//var arr = [“This ”, “ is ”, “ my ”, “ cat”]; 
//(Use array’s join method)

var arr = ["This", "is", "my", "cat"];
document.write("<h1>Array:</h1> " + arr + "<br>");
a = arr.join(" ");
document.write("<h1>String:</h1> " + a);

//Task 13

//13.Create a new array. Store values one by one in such a way that you can access the values in the order in which they 
//were stored. (FIFO-First In First Out)
let arr = ['keyboard', 'mouse', 'printer', 'monitor'];
document.write("Devices:<br>" + arr + "<br><br>")
document.write("Out:<br>" + arr[0] + "<br>");
document.write("Out:<br>" + arr[1] + "<br>");
document.write("Out:<br>" + arr[2] + "<br>");
document.write("Out:<br>" + arr[3] + "<br>");

//Task 14

//14.Create a new array. Store values one by one in such a way that you can access the values in reverse order
//(Last In First Out)
let arr = ['keyboard', 'mouse', 'printer', 'monitor'];
document.write("Devices:<br>" + arr + "<br><br>")
document.write("Out:<br>" + arr[3] + "<br>");
document.write("Out:<br>" + arr[2] + "<br>");
document.write("Out:<br>" + arr[1] + "<br>");
document.write("Out:<br>" + arr[0] + "<br>");

//Task 15

//15.Write a program to store phone manufacturers (Apple,Samsung, Motorola, Nokia, Sony & Haier) in an array. 
//Display the following dropdown/select menu in your browser using document.write() method:

let arr = ["Apple", 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
// document.write("<ul><li>" + arr[0] + "</li> <li>" + arr[1] + "</li> <li>" + arr[2] + "</li><li>" + arr[3] + "</li><li>" + arr[4] + "</li><li>" + arr[5] + "</li></ul>")
document.getElementById('apple').innerHTML = arr[0];
document.getElementById('samsung').innerHTML = arr[1];
document.getElementById('motorola').innerHTML = arr[2];
document.getElementById('nokia').innerHTML = arr[3];
document.getElementById('sony').innerHTML = arr[4];
document.getElementById('haier').innerHTML = arr[5];

//CHAPTER # 17 TO 20

//Task 1

//1. Declare and initialize an empty multidimensional array. (Array of arrays)
document.write("Declare and initialize an empty multidimensional array. (Array of arrays)<br>Check the code")
let arr = [
    [],
    [],
    [],
    [],
    [],
    [],
];

//Task 2

//2.Declare and initialize a multidimensional array representing the following matrix:
let arr = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
]
document.write(arr[0][0] + " ");
document.write(arr[0][1] + " ");
document.write(arr[0][2] + " ");
document.write(arr[0][3] + "<br>");
document.write(arr[1][0] + " ");
document.write(arr[1][1] + " ");
document.write(arr[1][2] + " ");
document.write(arr[1][3] + "<br>");
document.write(arr[2][0] + " ");
document.write(arr[2][1] + " ");
document.write(arr[2][2] + " ");
document.write(arr[2][3] + "<br>");

//Task 3

//3. Write a program to print numeric counting from 1 to 10
for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}

//Task 4

//4.Write a program to print multiplication table of any number using for loop.
//Table number & length should be taken as an input from user

var num = +(prompt("Enter a number to show its multiplication table"));
var length = +(prompt("Enter length multiplication table"));
for (var i = 1; i <= length; i++) {
    document.write(num + " X " + i + " = " + num * i + "<br>");
}

//Task 5

//5.Write a program to print items of the following array using for loop: 
//fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");
}
document.write("<br>");
for (var j = 0; j < fruits.length; j++) {
    document.write("Element at index " + j + " is " + fruits[j] + "<br>");
}

//Task 6

//6.Generate the following series in your browser. See example output. 
//a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
//b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
//c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 
//d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
//e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
document.write("<h3>Counting:</h3>");
for (var i = 1; i <= 15; i++) {
    document.write(i + ",");
}
document.write("<h3>Reverse Counting:</h3>");
for (var i = 10; i >= 1; i--) {
    document.write(i + ",");
}
document.write("<h3>Even:</h3>");
for (var i = 0; i <= 20; i = i + 2) {
    document.write(i + ",");
}
document.write("<h3>Odd:</h3>");
for (var i = 1; i <= 20; i = i + 2) {
    document.write(i + ",");
}
document.write("<h3>Series:</h3>");
for (var i = 2; i <= 20; i = i + 2) {
    document.write(i + "k,");
}

//Task 7

//7.You have an array 
//A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
//Write a program to enable“ search by user input” in an array.After searching,
//prompt the user whether the given item is found in the list or not.Example:

var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var customer = prompt("Welcome to ABC bakery. What do you want to order sir/ma'am?");
if (customer == A[0]) {
    alert(customer + " is available at index 0 in our bakery ");
} else if (customer == A[1]) {
    alert(customer + " is available at index 1 in our bakery ");
} else if (customer == A[2]) {
    alert(customer + " is available at index 2 in our bakery ");
} else if (customer == A[3]) {
    alert(customer + " is available at index 3 in our bakery ");
} else if (customer == A[4]) {
    alert(customer + " is available at index 4 in our bakery ");
} else {
    alert("We are sorry." + customer + " is not available in our bakery");
}

//Task 8

//8. Write a program to identify the largest number in the given array. 
//A = [24, 53, 78, 91, 12].

var A = [24, 53, 78, 91, 12];
document.write("Array items: " + A + "<br>");
for (var i = 0; i < A.length; i++) {
    if (A[i] == 91 && A[i] > 90) {
        document.write("The largest number is " + A[i]);
    }
}

//Task 9

//9. Write a program to identify the smallest number in the given array.
//A = [24, 53, 78, 91, 12]

var A = [24, 53, 78, 91, 12];
document.write("Array items: " + A + "<br>");
for (var i = 0; i < A.length; i++) {
    if (A[i] == 12 && A[i] < 13) {
        document.write("The smallest number is " + A[i]);
    }
}

//Task 10

//10. Write a program to print multiples of 5 ranging 1 to 100.
document.write("Write a program to print multiples of 5 ranging 1 to 100<br><br>");

for (var i = 1; i <= 20; i++) {
    var j = 5 * i;
    document.write(j + ",");
}