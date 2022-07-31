
document.addEventListener("keydown",function(event){

  if(event.key == "Enter"){
    event.preventDefault();
    const url = "http://www.google.com/search?q="+event.target.value;
    window.location.href = url;
  }

})


document.getElementById("paw").addEventListener("click",function(){

   if( document.getElementById("dogFact").style.display==="none"){
  
   document.getElementById("dogFact").style.display="block";

   }
   else
   document.getElementById("dogFact").style.display="none";
})

