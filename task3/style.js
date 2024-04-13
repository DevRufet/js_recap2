const inp1=document.querySelector(".inp1")
const inp2=document.querySelector(".inp2")
const btn=document.querySelector(".btn1")
const ol=document.querySelector(".ol1")
let arr=localStorage.getItem("value")? JSON.parse(localStorage.getItem("value")):[]
arr.forEach(element => {
    let div1 = document.createElement("div")
    let header=document.createElement("h1")
    let info=document.createElement("span")
    ol.appendChild(div1)
    div1.className="div1"
    
     div1.appendChild(header)
    div1.appendChild(info)
    
    info.textContent=element.info
    
    header.textContent=element.basliq
   
    
});
btn.addEventListener("click",function(){
    let div1 = document.createElement("div")
    let header=document.createElement("h1")
    let info=document.createElement("span")
    ol.appendChild(div1)
    div1.className="div1"
    
     div1.appendChild(header)
    div1.appendChild(info)
    
    info.textContent=inp2.value
    
    header.textContent=inp2.value
    arr.push({basliq:inp1.value,info:inp2.value})
    localStorage.setItem("value",JSON.stringify(arr))
    inp1.value=""
    inp2.value=""
})