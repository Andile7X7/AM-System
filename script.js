
if(document.getElementById("Menu")){
    document.getElementById("Menu").addEventListener("click", ()=>{
        document.querySelector(".SideMenu").classList.add("Visible")
    })
}

if(document.getElementById('MenuExit')){
    document.getElementById('MenuExit').addEventListener("click", ()=>{
        document.querySelector(".SideMenu").classList.remove("Visible")
    })
}