var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var btns=document.getElementById("regform");
var btnone=document.getElementById("onebtn");
var btnsone=document.getElementById("signupform");
var btnstwo=document.getElementById("btnstwo");
btnone.addEventListener('click',function(){
  btns.style.display="block";
})

btnstwo.addEventListener('click',function(){
  btnsone.style.display="block";
})

