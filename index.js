//selecting side navbar , menuicon

var Sidenav = document.getElementById("Sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click",function(){
    Sidenav.style.right=0
})
closenav.addEventListener("click",function(){
    Sidenav.style.right="-50%"
})