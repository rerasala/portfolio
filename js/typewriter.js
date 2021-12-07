//mostly cut and paste, but I changed a lot for this website
//changed the tags, the content, and the timeout to fit my website

var i = 0;
var txt = "ey there, I'm Rohan!";

function typeHeader() {
  if (i < txt.length) {
    document.getElementById("title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeHeader, 125);
  }
}

window.addEventListener("load", function() {
    
    typeHeader();
  
  }); 