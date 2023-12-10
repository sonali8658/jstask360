var arr=[];
function show(){
    var str=" ";
    for(var i=0;i<arr.length;i++)
    {
        str=str+'<li>'+arr[i]+'</li>'
        document.getElementById('items').innerHTML=str;
    }
}
function add()
{
    
var item=document.getElementById('field').value;
arr.push(item);
document.getElementById('field').value=" ";
show();
}
function dlt()
{
arr.pop();
show();

}
