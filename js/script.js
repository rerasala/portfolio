window.addEventListener("resize", function() {
    if(window.innerWidth >= 800){
    document.getElementById("navElements").style.display = "flex";
  } else {
    document.getElementById("navElements").style.display = "none";
  }
  });

window.addEventListener("load", function() {
  if(window.innerWidth >= 800){
    document.getElementById("navElements").style.display = "flex";
    document.getElementById("button-icon").setAttribute("tabindex", -1);
    console.log(document.getElementById("button-icon").attributes)
  } else {
    document.getElementById("navElements").style.display = "none";
  }

  typeHeader();

}); 

function displayMenu() {
  if (document.getElementById("navElements").style.display === "flex") {
    document.getElementById("navElements").style.display = "none";
  } else {
    document.getElementById("navElements").style.display = "flex";
  }

  if(document.getElementById("button-icon").src === "images/ci_hambuger.png") {
    document.getElementById("button-icon").src = "images/x_icon.png";
  }
}

function hideMenu() {
  
  document.getElementById("navElements").style.display = "none";
  
}


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