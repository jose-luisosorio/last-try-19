console.log("Your index.js  file is loaded correctly!");
function openSection(evt, sectionName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("section");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    tablinks = document.getElementsByClassName("tablink"); 
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("w3-red", "");
    }
    document.getElementById(sectionName).style.display = "block";
    evt.currentTarget.className += "w3-red";  
  }