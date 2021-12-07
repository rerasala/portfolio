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
  } else {
    document.getElementById("navElements").style.display = "none";
  }

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
