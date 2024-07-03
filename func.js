// funcyion dec laration
 function add()
 {

 }

 // to avoid refactoring(values will return 0) we use return function
 
 //str=mom
function palindrome(str)
{
let revstr=str.split('').reverse().join('');

if(revstr==str)
{
    console.log("palindrome")
}
else
{
    console.log(" not a palindrome")
}
}
console.log(palindrome("mom"))

