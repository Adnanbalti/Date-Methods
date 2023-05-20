/*                  Question-01. 
Write a program that displays current date and time in
your browser. */

// let currentTime = new Date();
// document.write(`The current date and time is ${currentTime}`);


/*                  Question-02. 
Write a program that alerts the current month in words.
For example December. */

// let monthName = ["January", "Febrauary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// let newDate = new Date();
// let month = newDate.getMonth();
// let currentMonth = monthName[month];
// document.write(`Current month ${currentMonth}`);


/*                  Question-03. 
Write a program that alerts the first 3 letters of the current
day, for example if today is Sunday then alert will show
Sun. */

// let daysInWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// let date = new Date();
// let day = date.getDay();
// let currentDay = daysInWeek[day];
// if (currentDay.length > 3) {
//     var shortForm = currentDay.slice(0, 3);
//     document.write(`Today is ${shortForm}`)
// }
// else {
//     document.write(`Today is ${currentDay}`);
// }


/*                  Question-04. 
Write a program that displays a message “It’s Fun day” if
its Saturday or Sunday today. */

// let daysInaWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// let dat = new Date();
// let today = dat.getDay();
// let curentDay = daysInaWeek[today];
// if (curentDay == "Saturday" || "Sunday") {
//     document.write(`It's fun day`)
// }
// else {
//     document.write(`Today is ${curentDay}`);
// }


/*                  Question-05. 
Write a program that shows the message “First fifteen
days of the month” if the date is less than 16 th of the month
else shows “Last days of the month”. */

// let date = new Date();
// let currentDate = date.getDate();
// if (currentDate < 16) {
//     document.write("First fifteen days of month");
// }
// else {
//     document.write("Last days of the month");
// }


/*                  Question-06. 
Write a program that determines the minutes since
midnight, Jan. 1, 1970 and assigns it to a variable that
hasn't been declared beforehand. Use any variable you like
to represent the Date object. */

// let currentDateAndTime = new Date();
// let millionSecond = currentDateAndTime.getTime();
// let minutesFrom = millionSecond / (60 * 1000);
// document.write(`Elapsed million second since January 1, 1970: ${millionSecond}` + "<br>");
// document.write(`Elapsed minutes since January 1, 1970: ${minutesFrom}`);


/*                  Question-07. 
Write a program that tests whether it's before noon and
alert “Its AM” else “its PM”. */

// let date = new Date();
// let hours = date.getHours();
// let minutes = date.getMinutes();
// let hoursMinutes = hours + ":" + minutes;
// if (hoursMinutes > 12) {
//     document.write(`Its ${hoursMinutes}AM`);
// }
// else {
//     document.write(`Its ${hoursMinutes}PM`)
// }


/*                  Question-08. 
Write a program that creates a Date object for the last day
of the last month of 2020 and assigns it to variable named
laterDate. */

// let dateAndTime = new Date(2020, 11, 31);
// dateAndTime.setMonth(dateAndTime.getMonth() + 1);
// dateAndTime.setDate(0);
// document.write(`Later Date: ${dateAndTime}`);


/*                  Question-09. 
Create a date object of the starting date of this Ramadan
and alert the number of days past since 1 st Ramadan?
Note: 1 st Ramadan was on June 18, 2015 */

// let newDate = new Date();
// let firstRamdanDate = new Date('2023-02-23');
// let diffTime = newDate.getTime() - firstRamdanDate.getTime();
// let passedDays = Math.floor(diffTime / (1000 * 3600 * 24));
// document.write(`${passedDays} days have been passed since 1st Ramdan, 2023`);


/*                  Question-10. 
Write a program that displays in your browser the
seconds that elapsed between the reference date and the
beginning of 2015.*/

// var currentDate = new Date();
// var beginningDate = new Date('2023');
// let diffTime = currentDate.getTime() - beginningDate.getTime();
// let passedSec = Math.floor(diffTime / (1000 * 60));
// document.write(`On reference date ${beginningDate} <br> ${passedSec} Seconds had passed since beggining of 2023`);


/*                  Question-11. 
Create a Date object for the current date and time.
Extract the hours, reset the date object an hour ahead and
finally display the date object in your browser. */

// var currentDate = new Date();
// var date_object = new Date();
// date_object.setUTCHours(currentDate.getUTCHours() - 1);
// document.write(`Current time is: ${currentDate} <br> 1 hour ago, it was ${date_object}`);


/*                  Question-12. 
Write a program that creates a date object and show the
date in an alert box that is reset to 100 years back? */

// var currentDate = new Date();
// var dateObject = new Date();
// dateObject.setFullYear(dateObject.getFullYear() - 100);
// document.write(`Current date is: ${currentDate} <br> 100 years ago, the date was: ${dateObject}`);


/*                  Question-13. 
Write a program to ask the user about his age. Calculate
and show his birth year in your browser. */

// var age = prompt("Enter your age in year");
// var current_date = new Date();
// current_date.setFullYear(current_date.getFullYear() - age);
// document.write(`Your age is: ${age} <br> Your birth year is: ${current_date}`);


/*                  Question-14. 
Write a program to generate your K-Electric bill in your
browser. All the amounts should be rounded off to 2
decimal places. Display the following fields:
a. Customer Name
b. Current Month
c. Number of units
d. Charges per unit
e. Net Amount Payable (within Due Date)
f. Late Payment Surcharge
g. Gross Amount Payable (after Due Date)
Where,
Net Amount Payable (within Due Date) = Number of units * Charges per unit
& Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge */

// var customer_Name = prompt("Enter customer name");
// var upper_Case = customer_Name.slice(0, 1).toUpperCase();
// var lower_Case = customer_Name.slice(1).toLowerCase();
// var camel_Case_Name = upper_Case + lower_Case;

// var month_Name = ["January", "Febrauary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var current_Date = new Date();
// var get_date = current_Date.getDate();
// var get_Month = current_Date.getMonth();
// var current_Month = month_Name[get_Month];

// var number_of_units = prompt("Enter number of unit");
// var charge_per_unit = 41.90;

// var net_amount_payable = number_of_units * charge_per_unit;
// var net_amount_payable_toFixed = net_amount_payable.toFixed(2);

// //Late payment surcharges is @10
// var late_payment_surcharge = (10 / 100) * net_amount_payable_toFixed;
// var late_payment_surcharge_toFixed = late_payment_surcharge.toFixed(2);
// var gross_amount_payable = net_amount_payable_toFixed + late_payment_surcharge_toFixed;

// if (get_date < 20) {
//     document.write(`
//     Name of customer: ${camel_Case_Name} <br> 
//     Date: ${get_date} <br> 
//     Name of month: ${current_Month} <br> 
//     Number of units: ${number_of_units} <br> 
//     Charges per unit: ${charge_per_unit} <br> 
//     Net amount payable within due date: ${net_amount_payable_toFixed}PKR
//     `);
// }
// else {
//     document.write(`
//     Name of customer: ${camel_Case_Name} <br> 
//     Date: ${get_date} <br> 
//     Name of month: ${current_Month} <br> 
//     Number of units: ${number_of_units} <br> 
//     Charges per unit: ${charge_per_unit} <br>
//     Late payment surcharges ${late_payment_surcharge_toFixed} <br> 
//     Net amount payable after due date: PKR${gross_amount_payable}PKR`
//     );
// };
