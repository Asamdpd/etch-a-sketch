const size = document.querySelector('input[id="size"]');
const pointsLabel = document.querySelector('label[id="pointsLabel"]');
const container = document.querySelector('div[class="container"]');
const color = document.querySelector('input[id="color"]');
const clearBtn = document.getElementById("clearBtn");
const rainbowBtn = document.getElementById("rainbowBtn");

let cont = false;
let divs;
let trigger = true;
let rainbowTrigger = false;
let o = Math.round, r = Math.random, s = 255;

pointsLabel.innerHTML = `${size.value} x ${size.value}`;
size.addEventListener("input", () => {
    pointsLabel.innerHTML = `${size.value} x ${size.value}`;
    
    
})

size.addEventListener("change", () => {
    container.style.gridTemplateColumns = `repeat(${size.value}, 1fr)`;
    createDivs();
})

const div = document.createElement("div");


function createDivs() {

    document.querySelectorAll('.square').forEach(e => e.remove());
    for(i = 0; i < size.value; i++){
        for(y = 0; y < size.value; y++){
           container.appendChild(document.createElement("div"));
        }
    }     
    
     divs = container.querySelectorAll(":scope > div");
     for(i=0; i < divs.length; i++){

        
         divs[i].classList.add("square");
         divs[i].setAttribute("id", `${i}`);
         
         elemen= document.querySelector(`div[id="${i}"]`);       
     }
     eventListeners();
}

function eventListeners(){
    divs.forEach(div => {
        div.addEventListener("click", () => {
            cont = !cont;
            if(rainbowTrigger){
               div.style.backgroundColor = 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s);   
            }else{
           div.style.backgroundColor = `${color.value}`;}
           divs.forEach(div => {
                        div.addEventListener("mouseover", () => {
                            if(cont){
                               if(trigger === true){
                                   div.style.backgroundColor = `${color.value}`;
                               }
                               if(rainbowTrigger){
                                  
                                   trigger = false;
                                   div.style.backgroundColor = 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s); 
                               }
                            }                         
                        })
                       
                    })
        })
    })
}

clearBtn.addEventListener("click", () => {
    divs.forEach(div => div.style.backgroundColor = "rgb(255, 255, 255)");
})

rainbowBtn.addEventListener("click", () => {
        rainbowTrigger = !rainbowTrigger;
        trigger= !trigger;
        if(rainbowTrigger){
            rainbowBtn.style.backgroundColor = "#5555f8";
        }else{
            rainbowBtn.style.backgroundColor =  "#8080ff";
        }
        
    })


color.addEventListener("click", () => {
    trigger = true;
    
    
})

createDivs();