$(document).ready(function(){     


 //alert("ddd");
  document.getElementById("myVid").addEventListener("mouseover", function() {
    this.play(); 
  
  });
  
  document.getElementById("myVid").addEventListener("mouseleave", function() {
    this.pause();
  });
  
  
  });