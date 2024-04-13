const btn=document.querySelector(".btn")
const inp=document.querySelector(".inp")
btn.addEventListener("click",function(){
    localStorage.setItem("value",inp.value)
    alert(inp.value)
    inp.value=""
})