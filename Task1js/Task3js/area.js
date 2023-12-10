function area()
{
    var r=eval(document.getElementById('val').value);
    const pi=3.141;
    var result=pi*r*r;
    alert(result);
}
function clr()
{
    document.getElementById('val').value=" ";
}