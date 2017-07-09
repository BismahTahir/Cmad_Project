//globally defined
var newarray=[];

function increament(index){

var namearray;
var ref=cakes[index];

if((ref.id)==index){
    cakes[index].quantity++;
}


newarray.push(ref);
console.log(newarray);
document.getElementById('basket1'+index).innerHTML=ref.quantity;
// console.log(ref);
// console.log(namearray);

localStorage.setItem("cake",JSON.stringify(newarray));
countTotalItems(ref.quantity);
displaydata();
}

function decreament(index){
var namearray;
var ref=cakes[index];
if((ref.id)==index){
cakes[index].quantity--;}

document.getElementById('basket1'+index).innerHTML=ref.quantity;



if(ref.quantity==0){
    newarray.pop();
}

else
newarray.splice(index,1);
countTotalItems(newarray.length);
localStorage.setItem("cake",JSON.stringify(newarray));
countTotalItems(ref.quantity);
displaydata();
console.log(newarray);
}


function displaydata(){
var namearray=localStorage.getItem("cake");
if(namearray){
    namearray=JSON.parse(namearray);
newarray=namearray;
console.log(namearray);
}
else
newarray=[];
    for(var i=0;i<newarray.length;i++){
document.getElementById('tb1').innerHTML += "<tr><td><img src="+'../images/'+newarray[i].image+"</td>"+"<td>"+newarray[i].name+"</td>"+"<td><button onclick="+`increament(`+ i +`)`+">+</button>"+newarray[i].quantity+"onclick="+'decreament('+i+`)`+"</td>"+"<td>"+newarray[i].price+"</td">+"</tr>";

    }

}

function countTotalItems(index) {
    var totalItems=0;
    var price=cakes[index];
    var container=localStorage.getItem("cake");
    if(container){
        container=JSON.parse(container);
    }

    
  
      totalItems += index;
  
    document.getElementById("basket").innerHTML = totalItems;
}




