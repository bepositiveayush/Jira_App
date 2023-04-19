let allcolors = document.querySelectorAll(".color");
let main = document.querySelector(".main")

for(let i=0 ; i<allcolors.length ; i++){
    allcolors[i].addEventListener("click",changecolor)    
}

function changecolor(e){
    let ele = e.currentTarget;
    //console.log(ele); 

    let allclasses = ele.classList;
    let color = allclasses[1];
    // console.log(color);
    main.style.backgroundColor = color;

}
