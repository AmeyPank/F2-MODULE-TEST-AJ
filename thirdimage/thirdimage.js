function roll(){
   
   var rand = Math.floor(Math.random()*6)+1;
   document.getElementById('result').innerHTML = 
   "<img src = 'image/"+rand+".png'/>"
}