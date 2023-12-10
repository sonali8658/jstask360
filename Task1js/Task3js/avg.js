 function avg()
{
var num1=eval(document.getElementById('num1').value);
var num2=eval(document.getElementById('num2').value);
var num3=eval(document.getElementById('num3').value);
var result=(num1+num2+num3)/3;
alert(result);
}
function clr()
{
    document.getElementById('num1').value=" ";
    document.getElementById('num2').value=" ";
    document.getElementById('num3').value=" ";
}