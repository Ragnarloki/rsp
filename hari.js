function my(){
	var sd=Math.floor((Math.random()*3)+1);
    var s=Math.floor((Math.random()*3)+1);
		

	if (sd===1 && s===1){
  document.getElementById('rock').innerHTML="<h1>rock</h1>";
   document.getElementById('paper').innerHTML="<h1>rock</h1>";
  document.getElementById('hd1').innerHTML="<h1>draw</h1>";
}
   
	if (sd===2 && s===2){
  document.getElementById('rock').innerHTML="<h1>paper</h1>";
   document.getElementById('paper').innerHTML="<h1>paper</h1>";
    document.getElementById('hd1').innerHTML="<h1>draw</h1>";
}
	if (sd===3 && s===3){
  document.getElementById('rock').innerHTML="<h1>scissors</h1>";
   document.getElementById('paper').innerHTML="<h1>scissors</h1>";
   document.getElementById('hd1').innerHTML="<h1>draw</h1>";
}
	if (sd===1 && s===3){
  document.getElementById('rock').innerHTML="<h1>rock</h1>";
   document.getElementById('paper').innerHTML="<h1>scissors</h1>";
    document.getElementById('hd1').innerHTML="<h1>player2 win</h1>";
   }
   if (sd===1 && s===2){
  document.getElementById('rock').innerHTML="<h1>rock</h1>";
   document.getElementById('paper').innerHTML="<h1>paper</h1>";
    document.getElementById('hd1').innerHTML="<h1>player1 win</h1>";
   }
   
   	if (sd===2 && s===1){
  document.getElementById('rock').innerHTML="<h1>paper</h1>";
   document.getElementById('paper').innerHTML="<h1>scissors</h1></h1>";
 document.getElementById('hd1').innerHTML="<h1>player2 win</h1>";
}
   	if (sd===2 && s===3){
  document.getElementById('rock').innerHTML="<h1>paper</h1>";
   document.getElementById('paper').innerHTML="<h1>scissors</h1>";  
    document.getElementById('hd1').innerHTML="<h1>player2 win</h1>";
    

}
if (sd===3 && s===1){
  document.getElementById('rock').innerHTML="<h1>scissors</h1>";
   document.getElementById('paper').innerHTML="<h1>rock</h1>";
    document.getElementById('hd1').innerHTML="<h1>player2 win</h1>";
   }
if (sd===3 && s===2){
  document.getElementById('rock').innerHTML="<h1>scissors</h1>";
   document.getElementById('paper').innerHTML="<h1>paper</h1>";
    document.getElementById('hd1').innerHTML="<h1>player1 win</h1>";
   }
   
}
	


