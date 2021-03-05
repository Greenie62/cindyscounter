
var iceFishBtn = document.querySelector(".iceFishBtn")
var iceGrid = document.querySelector(".iceGrid");
var speechBlurb = document.querySelector(".speechBlurb");
var blurbs = document.querySelectorAll(".blurb")
var fishMouth = document.querySelector(".fishMouth");


function pourIce(){
    console.log("ice cooler fired")
for(let i=0;i<10;i++){
    for(let j=0;j<10;j++){
        setTimeout(()=>{
let iceCount = document.querySelectorAll(".ice");
if(iceCount.length < 99){
        let ice = document.createElement('div');
        ice.className="ice"
        ice.style.gridColumnStart=j;
        ice.style.gridRowStart=i
        console.log(iceCount.length)
        iceGrid.appendChild(ice)
}
console.log(iceCount.length)
      
    },j*250)
}
}

setTimeout(()=>{
    let ice = document.createElement('div');
    ice.className="ice"
    ice.style.gridColumnStart=10;
    ice.style.gridRowStart=10
    iceGrid.appendChild(ice)
},2500)

setTimeout(()=>{
    speechBlurb.innerHTML = "<small class='caption'>chilling!! 😎</small>"
    fishMouth.style.transform='rotate(10deg)'
},3000)
}




function linearIce(){
for(let i=0;i<100;i++){
    setTimeout(()=>{
let ice = document.createElement('div');
        ice.className="ice"
      
        iceGrid.appendChild(ice)
    },i*25)

}

setTimeout(()=>{
    speechBlurb.innerHTML = "<small class='caption'>chilling!! 😎</small>"
    fishMouth.style.transform='rotate(10deg)'
    },4000)

}





function iceFish(){
    speechBlurb.innerHTML = ""
    iceGrid.innerHTML=""
    Math.random() > .5 ? linearIce() : pourIce()
    
     
}





iceFishBtn.onclick=iceFish



function captionText(){

    speechBlurb.innerHTML = "<small class='caption'>hey brat, i need ice!! :(</small>"
}

captionText()

var allBlurbs = [...blurbs, speechBlurb]


function flashBlurbs(){
    for(let i=0;i<allBlurbs.length;i++){
        setTimeout(() => {
            allBlurbs[i].style.opacity = 1
        },i*500);
    }
}


flashBlurbs()




