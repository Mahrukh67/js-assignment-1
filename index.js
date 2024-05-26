// CHAPTER NO 01 --------------------------
// quiz 1
alert("Welcome to our website!");
// quiz 2
alert("Error! Please enter a valid password");
// quiz 3
alert("wellcome to js land \n happy Coding!" );
// quiz 4
alert("wellcome to js land......" );
alert("happy Coding! \n Prevent this page from creating additional dailogs" );
// quiz 5
console.log("Heloo i can run js through my web browser console");
// quiz 6 ---done
// quiz 7 ---done


// CHAPTER NO 02 --------------------------
// quiz 1
// ---var username;
// ---let username;
// quiz 2
let username = "Mahrukh";
// quiz 3
let message = "Hello World";
alert(message);
// quiz 4
let studentName = "Mahrukh";
let stuage = "22";
let course = "Certified Mobile Application Development";
alert(studentName);
alert(stuage);
alert(course);
// quiz 5
let food = "Pizza\npizz\npiz\npi\np";
alert(food);
// quiz 6
let email = "example@example.com";
alert("My email address is " + email);
// quiz 7
let book = "A smarter way to learn JavaScript";
alert(book);
// quiz 8
document.write("Yah! i can write HTML content through JavaScript" + "<br>");
// quiz 9
let decoString = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(decoString);


// CHAPTER NO 03 --------------------------
// quiz 1
let myage = 22;
alert(" I am " + myage + " Years Old.");
// quiz 2
let visitCount = 22;
alert("You have visited this site " + visitCount + " times.");
// quiz 3
let birthyear = 2002;
document.write(" My birth year is " + birthyear + "<br>" + "Data type of my declared variable is " + typeof birthyear + "<br>");
// quiz 4
let visitorName = "john Doe";
let productTitle = "T-Shirt(s)";
let quantity = 5;
document.write( visitorName + " ordered " + quantity + productTitle + " on XYZClothing Store.");


// CHAPTER NO 04 --------------------------
// quiz 1
// let variable1, variable2, variable3;

// quiz 2
//---- 5 legal variables names-----
// let firstName;
// let last_Name;
// let userAge;
// let _price;
// let $amount;
//----  5 illegal variable names------
// let 1number;   // Illegal: Cannot start with a number
// let my variable;   // Illegal: Contains space
// let my-variable;   // Illegal: Contains hyphen
// let for;   // Illegal: Reserved keyword
// let user.age;   // Illegal: Contains dot

// quiz 3
document.write("<h2>Rules for naming JS Variables</h2>");
document.write("<p>Variable names can only contain letters, numbers, underscores, and dollar signs. For example $my_1stVariable.</p>");
document.write("<p>Variables must begin with a letter, underscore, or dollar sign. For example $name, _name, or name.</p>");
document.write("<p>Variable names are case-sensitive.</p>");
document.write("<p>Variable names should not be JS reserved keywords.</p>");


// CHAPTER NO 05 --------------------------
document.write("<h2> Chapter 5 </h2>");
// quiz 1
document.write("<h3> QUIZ 1</h3>");
let a = 3;
let b = 5;
let add = a + b;
document.write("Sum of " + a + " and " + b + " is " + add + "<br>");

// quiz 2
document.write("<h3> QUIZ 2</h3>");
let sub = a - b;
document.write("Sub of " + a + " and " + b + " is " + sub + "<br>");
let divide = a / b;
document.write("Division of " + a + " and " + b + " is " + divide + "<br>");
let multiply = a + b;
document.write("Multiplication of " + a + " and " + b + " is " + multiply + "<br>");
let modulus = a % b;
document.write("Modulus of " + a + " and " + b + " is " + modulus + "<br>");

// quiz 3
document.write("<h3> QUIZ 3</h3>");
 // a. Declare a variable
 let num;
 // b. Show the value of variable after declaration
 document.write("Value after variable declaration is: " + num + "<br>");
  // c. Initialize the variable with some number
  num = 5;
  // d. Show the initial value of the variable
  document.write("Initial value: " + num + "<br>");
  // e. Increment the variable
  num++;

  // f. Show the value of variable after increment
  document.write("Value after increment is: " + num + "<br>");

  // g. Add 7 to the variable
  num += 7;

  // h. Show the value of variable after addition
  document.write("Value after addition is: " + num + "<br>");

  // i. Decrement the variable
  num--;

  // j. Show the value of variable after decrement
  document.write("Value after decrement is: " + num + "<br>");

  // k. Show the remainder after dividing the variable’s value by 3
  let remainder = num % 3;

  // l. Show the remainder
  document.write("The remainder is: " + remainder + "<br>");

// quiz 4
document.write("<h3> QUIZ 4</h3>");
let ticket = 600;
let totalCost = ticket * 5;
document.write("Total Cost of 5 Movie tickets is: " + totalCost + "<br>");

// quiz 5
document.write("<h3> QUIZ 5</h3>");
document.write("<h2> Table 5</h2>");
document.writeln('2 x 1 = ', 2*1, '<br>')
document.write('2 x 2 = ', 2*2, '<br>')
document.write('2 x 3 = ', 2*3, '<br>')
document.writeln('2 x 4 = ', 2*4, '<br>')
document.write('2 x 5 = ', 2*5, '<br>')
document.write('2 x 6 = ', 2*6, '<br>')
document.writeln('2 x 7 = ', 2*7, '<br>')
document.write('2 x 8 = ', 2*8, '<br>')
document.write('2 x 9 = ', 2*9, '<br>')
document.write('2 x 10 = ', 2*10, '<br>')

// quiz 6
document.write("<h3> QUIZ 6</h3>");
// convert into celcios to faren
let celsiusTemp = 30;
let fahrenheitTemp = (celsiusTemp * 9/5) + 32;
document.write(celsiusTemp + "°C is " + fahrenheitTemp + "°F<br>");
// convert into celcios to faren
let fahrenheitTemp2 = 86;
let celsiusTemp2 = (fahrenheitTemp2 - 32) * 5/9;
document.write(fahrenheitTemp2 + "°F is " + celsiusTemp2 + "°C");

// quiz 7
document.write("<h3> QUIZ 7</h3>");
document.write("<h4>Shopping Cart</h4>");

let item1 = 650;
let item2 = 100;
let quantityItem1 = 3;
let quantityItem2 = 7;
let shipCharges = 100;
let totalAmmount = (quantityItem1*item1) + (quantityItem2*item2) + shipCharges;

document.write("Price  of Item1 is: " + item1 + "<br>" + " quantity of item 1 is: " + quantityItem1 + '<br>');
document.write("Price  of Item2 is: " + item2 + "<br>" + " quantity of item 2 is: " + quantityItem2 + '<br>');
document.write("Shipping Charges: " + shipCharges + '<br>');

document.write("Total Cost of Your Order is: " + totalAmmount + "<br>");

// quiz 8
document.write("<h3> QUIZ 8</h3>");
document.write("<h4>Mark Sheet</h4>");
let totalMarks = 850;
let obtainMarks = 606;
let result = obtainMarks / totalMarks * 100;
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Obtained Marks: " + obtainMarks + "<br>");
document.write("Percentage of result is: " + result + "<br>");

// quiz 9
document.write("<h3> QUIZ 9</h3>");
document.write("<h4>Currency in PKR</h4>");
   let usDollars = 10;
   let saudiRiyals = 25;
   let usdToPkrRate = 104.80;
   let sarToPkrRate = 28;
   let totalPkr = (usDollars * usdToPkrRate) + (saudiRiyals * sarToPkrRate);

   document.write("Total currency in Pakistani Rupees: " + totalPkr + " PKR. " + "<br>");

// quiz 10
document.write("<h3> QUIZ 10</h3>");
let number = 5;
let resultNumber = ((number+5)*10)/2;
document.write("Single Expression result is: " + resultNumber)

// quiz 11
document.write("<h3> QUIZ 11</h3>");
document.write("<h4>Age Calculation</h4>");
let currentYear = 2016;
let dobYear = 1992;
let age = currentYear - dobYear;
document.write(" Current year: " + currentYear + "<br>" + "Birth Year: " + dobYear + "<br>" + "age is: " + age + "<br>");

// quiz 12
document.write("<h3>QUIZ 12</h3>");
let r = 20;
let pi = 3.142;
let circumference = 2 * pi * r;
let area = pi * (r * r);
document.write(" Radius of a Circle: " + r + "<br>" + " The circumference is: " + circumference + "<br>" + "The Area is: " + area + "<br>");

// quiz 13
document.write("<h3>QUIZ 13</h3>");
document.write("<h4>The Lifetime Supply Calc!</h4>");

let favorite_snack = "chocolate chip";
let current_age = 15;
let maximum_age = 65;
let amount_per_day = 3;
let years_remaining = maximum_age - current_age;
let total_needed = years_remaining * amount_per_day;

document.write("Favorite Snacks: " + favorite_snack + "<br>" + " The current age is: " + current_age + "<br>" + "Estimated Maximum Age: " + maximum_age + "<br>" + "Ammount of Snacks per day: " + amount_per_day +"<br>");
document.write("You will need " +  total_needed + " to last you until the ripe old age of " + maximum_age + "<br>")

// CHAPTER NO 6-9 --------------------------
document.write("<h2> Chapter 6-9 </h2>");
// quiz 1
document.write("<h3>QUIZ 1</h3>");
let value_a = 10;
document.write("Result:"+ "<br>"+ "The result of value a is :" + value_a + "<br>" + "<br>");
document.write("---------------------------------------------" + "<br>" + "<br>");
++value_a;
document.write("The value of ++a is: " ,value_a + "<br>");
document.write("Now the value of a is: " ,value_a + "<br>" + "<br>");
document.write("The value of a++ is: " ,value_a++ + "<br>");
document.write("Now the value of a is: " ,value_a + "<br>" + "<br>");
document.write("The value of --a is: " , --value_a + "<br>");
document.write("Now the value of a is: " ,value_a + "<br>" + "<br>");
document.write("The value of a-- is: " ,value_a-- + "<br>");
document.write("Now the value of a is: " ,value_a + "<br>" + "<br>");

// quiz 2
document.write("<h3>QUIZ 2</h3>");
let A = 2;
let B = 1;
// step 1
document.write("<h4>step 1 values</h4>");
let a_val = --A;
 document.write("step 1  --a is: "+ a_val   + "<br>");
//  after variables value 
document.write("a = : " + A  + "<br>");
document.write("b = : " + B  + "<br>");

// step 2
document.write("<h4>step 2 values</h4>" );
document.write("step 2  --b is: "+  --B   + "<br>");
document.write("a = : " + A  + "<br>");
document.write(" b = :" + B  + "<br>");
let resu = --A  -  --B;
document.write("Result of --a - --b  = : " ,resu  + "<br>");

// step 3
document.write("<h4>step 3 values</h4>");
++B;
let step_3 = resu + ++B;
document.write("Result of --a - --b + ++b  = : " ,step_3 + "<br>");
document.write("a = : " + a_val  + "<br>");
document.write(" b = :" + B  + "<br>");

// step 4
document.write("<h4>step 4 values</h4>");
let step_b=B--;
document.write("Result of --a - --b + ++b + b--  = : " ,step_3 + step_b + "<br>");
document.write("a = : " + a_val  + "<br>");
let B_=B--; 
document.write(" b = :" + B_  + "<br>");
document.write("<h4>Final  values</h4>");
document.write("a is : " + a_val  + "<br>");
document.write(" b is :" + B_  + "<br>");
document.write("Result  = : " ,step_3 + step_b + "<br>");

// quiz 3
document.write("<h3>QUIZ 3</h3>");
let fulName = prompt("Please enter your name:");
document.write("Hello, " + fulName + " Welcome!");

// quiz 4
document.write("<h3>QUIZ 4</h3>");
document.write("question 4 pdf mai nhi hai!");

// quiz 5
document.write("<h3>QUIZ 5</h3>");
let tableNumber = prompt("Please enter a number!");
if(tableNumber === ""){
  tableNumber = 5;
}
else{
   tableNumber=parseInt(tableNumber);
}
let table = "Multiplication Table for " + tableNumber + "<br>";
 for(let i=1;i<=10;i++){
      table = table + tableNumber + " x " + i + " = " + tableNumber*i + "<br>";
 } 
 document.write(table);

 // quiz 6
 document.write("<h3>QUIZ 6</h3>");
let subject1 = prompt("Enter first subject name: ");
let subject2 = prompt("Enter second subject name: ");
let subject3 = prompt("Enter third subject name: ");

const total_Marks = 100;
const subtotal = total_Marks*3;
let ObtainedMarksSub1 =  parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
let ObtainedMarksSub2 =  parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
let ObtainedMarksSub3 =  parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

let sub1Percentage = (ObtainedMarksSub1 / (total_Marks)) * 100;
let sub2Percentage = (ObtainedMarksSub2 / (total_Marks)) * 100;
let sub3Percentage = (ObtainedMarksSub3 / (total_Marks)) * 100;

let totalObtainedMarks = ObtainedMarksSub1 + ObtainedMarksSub2 + ObtainedMarksSub3;
let percentage = (totalObtainedMarks / (total_Marks * 3)) * 100;

document.write("<h2>Result</h2>");
document.write("<table border='1' cellspacing='0' cellpadding='5'>");
document.write("<tr><th>Subject</th> <th>Total Marks</th> <th>Obtained Marks</th> <th>Percentage</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + total_Marks + "</td><td>" + ObtainedMarksSub1 + "</td><td>" + sub1Percentage + "%</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + total_Marks + "</td><td>" + ObtainedMarksSub2 + "</td><td>" + sub2Percentage + "%</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + total_Marks + "</td><td>" + ObtainedMarksSub3 + "</td><td>" + sub3Percentage + "%</td></tr>");
document.write("<tr><td></td> <td> " + subtotal + "</td> <td>" + totalObtainedMarks + "</td> <td>" + Math.round(percentage) + "%</td></tr>");
document.write("</table>");



