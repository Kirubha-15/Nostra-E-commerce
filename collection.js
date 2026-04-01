var productContianer=document.getElementById("products")
var serach=document.getElementById("search")
var productlist=productContianer.querySelectorAll("div")


serach.addEventListener("keyup",function(){
    var enteredValue=event.target.value.toUpperCase()
    for(count=0;count<productlist.length;count=count+1){
        var productname=productlist[count].querySelector("p").textContent
        if(productname.toUpperCase().indexOf(enteredValue)<0){
            productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
        }
    }
})