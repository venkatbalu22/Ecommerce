var sideNavbar = document.querySelector(".side-navbar")
var toggleIcon= document.getElementById("toggle-icon")

function showNav(){
    sideNavbar.style.left="0"

}
function closeNav(){
    sideNavbar.style.left="-80%"
}

var productContainer= document.getElementById("products")
var search =document.getElementById("search")
var productlist = productContainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredValue = event.target.value.toUpperCase()

    for(count=0;count<productlist.length;count=count+1){
      var productname = productlist[count].querySelector("p").textContent
      if (productname.toUpperCase().indexOf(enteredValue)<0){
        productlist[count].style.display="none"
      }
      else{
        productlist[count].style.display="black"
      }
    }

})
