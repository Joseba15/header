window.onload = init;
    // function init(){
    //     document.querySelectorAll(".more")[0].addEventListener("click",submenu);
    //     document.querySelector(".submenu > ul").style.display = "none"; 
    // }
    
    // function submenu(){
    //     var estado = document.querySelector(".submenu > ul").style.display;
    //     if (estado == "none"){
    //         document.querySelector(".submenu > ul").style.display = "block";
    //     }else{
    //         document.querySelector(".submenu > ul").style.display = "none";            
    //     };
        
    // }
    function init(){
        document.querySelectorAll(".more")[0].addEventListener("click",submenu);
        
    }
    
    function submenu(){
        var estado = document.querySelector(".menuDiv").style.display;
        // if (estado == "none"){
        //     document.querySelector(".menuDiv").style.display = "block";
        // }else{
        //     document.querySelector(".menuDiv").style.display = "none";            
        // };
        document.querySelector(".menuDiv").classList.toggle('desplegado')
        
    }