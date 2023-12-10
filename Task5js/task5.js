//for storing multiple values
var arr=[];
//
var cost;
var sum=0;
var gst;


//For adding  values in array
function add()
{
    var num=eval(document.getElementById('cost').value);
arr.push(num);
//after push into array field will be empty
document.getElementById('cost').value=" ";

    //for displaying in list
    var str=" ";
    for(var i=0;i<arr.length;i++)
    {
        str=str+'<li>'+arr[i]+'</li>';
    }
   cost= document.getElementById('show').innerHTML=str;
   
}

//for total calculation
function total()
{

for(var i=0;i<arr.length;i++)
{
    sum=sum+arr[i];
    
}
cost=document.getElementById('val1').innerHTML=sum;


}
function discount()
{
    
    var discount=(cost*5)/100;
    //After discount
    var total=cost-discount;
   gst= document.getElementById('val2').innerHTML=total;
}
function gstt()
 {
    //gst calculus
    var tgst=(cost*18)/100;
  //Total money need to pay
   var val3=tgst+gst;
  document.getElementById('val3').innerHTML=val3;
}