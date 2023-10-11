var navBar=document.getElementById("barraNav");
window.onresize=function(){
    let anchoPantalla=window.innerWidth;
    console.log(anchoPantalla)
    if(anchoPantalla>800)
    {
        if(!navBar.classList.contains("fixed-top"))
        navBar.classList.add("fixed-top");
    }
    else{
        if(navBar.classList.contains("fixed-top"))
        navBar.classList.remove("fixed-top");
    }
}
