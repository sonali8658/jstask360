function add()
{
    var n1=eval(document.getElementById('num1').value);
    var n2=eval(document.getElementById('num2').value);
    var result=n1+n2;
    alert(result);

}
function erase()
{
    document.getElementById('num1').value=" ";
    document.getElementById('num2').value=" ";
}