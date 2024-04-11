const inp1=document.querySelector(".inp1")
inp1.addEventListener("keyup",function(e){
    e.preventDefault()
    localStorage.setItem("value",inp1.value)    
})