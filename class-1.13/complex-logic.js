/*&&,||
age >=21 and gender== Male
age >=18 and gender== Female
everything else 
*/

var age = 16;
var gender ="Male";

if (age>=21 && gender=="Male"){
    console.log("biyar boyosh hoyache");
}
else if(age>=18 && gender=="Female"){
    console.log("biyar boyosh hoyache");
}
else{
    console.log("biyar boyosh hoyni")
}

var age = 18;
var gender="Female";

if ((age>=21 && gender=="Male")
    ||(age>=18 && gender=="Female")){
    console.log("biyar boyosh hoyacha");
}

else{
    console.log("biyar boyosh hoyni")
}

var age = 22;
var gender="Male";

if ((age>=21 && gender=="Male")
    ||(age>=18 && gender=="Female")){
    console.log("biyar boyosh hoyacha");
}

else{
    console.log("biyar boyosh hoyni")
}





