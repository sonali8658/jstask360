function get()
{
var a=eval(document.getElementById('a').value);
var b=eval(document.getElementById('b').value);
var val=(a*a)+(b*b)+(2*a*b);
alert("(a+b)^2="+val);
}
function erase()
{
document.getElementById('a').value=" ";
document.getElementById('b').value=" ";
}