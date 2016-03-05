var ref=document.getElementById("button1");
ref.addEventListener("mouseup",eventMouseUp);
ref.addEventListener("mousedown",eventMouseDown);

function eventMouseUp(){
   document.getElementById("button1").innerHTML=  "Like" ;
   document.getElementById("button1").style.background="rgb(153, 204, 255)";
}

function eventMouseDown(){
    
     document.getElementById("button1").innerHTML= "UnLike" ;
     document.getElementById("button1").style.background="rgb(255, 92, 51)";
}