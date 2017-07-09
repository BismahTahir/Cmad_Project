imagecount=1;
total=6;

function slider(x){
var image = document.getElementById("myimg");
imagecount = imagecount + x;
if(imagecount > 6)
{imagecount = 1;}
if(imagecount < 1){
imagecount = total;
}
image.src = "../images/img"+ imagecount +".jpg";
}







imagecount=1;
total=6;

var caption=["caption 1","caption 2","caption 3","caption 4","caption 5","caption 6"];
var cap_str=0;
var disp_cap=0;
function slider(x){
var image = document.getElementById("myimg");
disp_cap = document.getElementById("slider_caption");
imagecount = imagecount + x;
if(imagecount > 6)
{imagecount = 1;}
if(imagecount < 1){
imagecount = total;
}
image.src = "images/img"+ imagecount +".jpg";
disp_cap.innerHTML="<h1">+caption[cap_str]+"</h1>";
cap_str++;
}
window.setInterval(function slideA(){
var image=document.getElementById("myimg");
imagecount = imagecount + 1;
if(imagecount > 6){
imagecount = 1;}
if(imagecount < 1){
imagecount = total;
}
image.src = "images/img"+ imagecount +".jpg";
disp_cap.innerHTML="<h1">+caption[cap_str]+"</h1>";
cap_str++;


},5000);
var i=1;
var t=3;
function sliderimg(x){
var image = document.getElementById("pinkheart");
i = i + x;
if(i > 3)
{i = 1;}
if(i < 1){
i= t;
}
image.src = "images/h1"+ i +".jpg";
}
window.setInterval(function sliderimg(){
var image=document.getElementById("pinkheart");
i = i + 1;
if(i > 3){
i = 1;}
if(i < 1){
i= t;
}
image.src = "images/h"+ i +".jpg";


},2000);



// var c=document.getElementsByClassName("r1");
// c.onmouseover=function(){
//     this.style.color="red";
// }

var heart=document.getElementById("pinkheart");

// heart.addEventListener("onclick",sliderimg);
var i;

var acc = document.getElementsByClassName("accordian");
for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){

   
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
                
        }
    }
}

//image genral function
function swap_img(id,img_src,caption,str,btnid,btncap){

  document.getElementById(caption).innerHTML="<h2>"+str+"</h2>";
    document.getElementById(id).src=img_src;
    document.getElementById(btnid).value=btncap;
}
function range(){

    var range_input=document.getElementById('user_slider').value;
    document.getElementById('user_price').innerHTML=range_input;
}

//user gallery selection function
function gallery_user(){
    var arry=[];
    var price=[1200,1100,1400,1300,750,890]
    //  var cap=document.getElementsByClassName("galler_cap").innerHTML;
    // var cap=gallery_childs.childNodes[0].childNodes[0].childNodes[1].nodeValue;
    // var cap=gallery_childs.childNodes[0].childNodes[0].childNodes[1].childNodes;
    
    
    var event=document.getElementById('events_1').value;
    var range_input=document.getElementById('user_slider').value;
    var range_input1=document.getElementById('user_price').innerHTML;
    var gallery_parent=document.getElementById('gallery_container');
     var gallery_childs1=gallery_parent.childNodes;
    var gallery_childs=gallery_parent.getElementsByTagName('div');
    var byclass=gallery_parent.getElementsByClassName('gallery_img');
    var replace=document.getElementsByClassName('gallery_cap').innerHTML;
    // var gallery_image=gallery_childs.getElementsByTagName('img'); 

// for(var j=0,k=0,l=j+1;j,k,l<gallery_childs.length;j++,k++,l++){
    
    
//     arry[i]=gallery_childs.childNodes[j].childNodes[k].childNodes[l].childNodes;
// }

//  gallery_image.src="images/c"+ i +".jpg";
//   gallery_image.src="images/e"+ i +".jpg";

// for(var i=0;i < gallery_childs1.length;i++){

// if(event=="Birthday" && (price==arr[i] || arr[i] < 1500))
// if(gallery_childs1[i].childNodes[0].nodeName =="IMG")
            
// gallery_childs1[i].firstChild.setAttribute('src','./images/e'+ i +'.jpg');
// gallery_childs1[i].firstChild.src= '../images/e'+ i +'.jpg';
// }

if(event=="Birthday" && range_input <1500){

     for(var i=0;i < byclass.length;i++){
    for(j=0;j<3;j++){

          byclass[i].childNodes[j].src=  './images/c'+ i +'.jpg';
    //       if(byclass[i].childNodes[j].hasAttribute('class')){
    //       byclass[i].childNodes[j].innerHTML=price[i]+"$";
    //   }
          
}

// byclass[i].childNodes[2].nodeValue="<h4>"+price[i]+"$"+"</h4>";
//    byclass[i].lastChild.nodeValue=price[i]+"$"; 

}
}
  else if(event=="Mother Day" && range_input < 1500){

     for(var i=0;i < byclass.length;i++){
    for(j=0;j<3;j++){

          byclass[i].childNodes[j].src=  './images/mo'+ i +'.jpg';

    }

         //problem area
        //   byclass[i].childNodes[2].nodeValue=price[i]+"$";//node is working
        // byclass[i].childNodes[2].setAttribute('class','gallery_cap');
      
}
  }


  else if(event=="Bridal Shower" && (range_input < 1500)){

     for(var i=0;i < byclass.length;i++){
    for(j=0;j<3;j++){

          byclass[i].childNodes[j].src=  './images/e'+ i +'.jpg';

    }

      
}
  }

   else if(event=="Baby Shower" && (range_input < 1500)){

     for(var i=0;i < byclass.length;i++){
    for(j=0;j<3;j++){

          byclass[i].childNodes[j].src=  './images/z'+ i +'.jpg';

    }

      
}
  }

  else if(event=="Independance" && (range_input < 1500 )){

     for(var i=0;i < byclass.length;i++){
    for(j=0;j<3;j++){

          byclass[i].childNodes[j].src=  './images/p'+ i +'.jpg';

    }

      
}
  }

  else{

for(var i=0;i < byclass.length;i++){
    for(j=0;j<3;j++){

          byclass[i].childNodes[j].src=  './images/g'+ i +'.jpg';
    }

}

  }


  //caption
//   for(var m=0;m<byclass.length;m++){

//       if(byclass[m].hasAttribute("class")){
//           byclass[m].innerHTML=price[m]+"$";
//       }
//   }
    
}





//Local storage




