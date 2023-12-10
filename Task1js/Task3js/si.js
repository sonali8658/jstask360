function si(){
    var p,t,r;
    p=eval(document.getElementById('principal').value);
    t=eval(document.getElementById('time').value);
    r=eval(document.getElementById('intrest').value);
    var result=(p*t*r)/100;
    alert(result);
}
function clear()
{
    document.getElementById('principal').value=" ";
    document.getElementById('time').value=" ";
    document.getElementById('intrest').value=" ";
}