const size = document.querySelector('input[id="size"]');
const pointsLabel = document.querySelector('label[id="pointsLabel"]');
const container = document.querySelector('div[class="container"]');
const color = document.querySelector('input[id="color"]')

let divs;
let trigger = false;


pointsLabel.innerHTML = `${size.value} x ${size.value}`
console.log(size.value)

size.addEventListener("input", () => {
    pointsLabel.innerHTML = `${size.value} x ${size.value}`;
    
    
})

size.addEventListener("change", () => {
    container.style.gridTemplateColumns = `repeat(${size.value}, 1fr)`
    test()
})

const div = document.createElement("div");


function test() {
    
    let elem;
    

    document.querySelectorAll('.square').forEach(e => e.remove());
    for(i = 0; i < size.value; i++){
        for(y = 0; y < size.value; y++){
           container.appendChild(document.createElement("div")) ;
        }
    }   
    
    
     divs = container.querySelectorAll(":scope > div")
     for(i=0; i < divs.length; i++){

        
         divs[i].classList.add("square")
         divs[i].setAttribute("id", `${i}`)
         
         elemen= document.querySelector(`div[id="${i}"]`)
         console.log(elem)
         
     }

     divs.forEach(div => {
         div.addEventListener("click", () => {
            div.style.backgroundColor = `${color.value}`;
            trigger = !trigger
            divs.forEach(div => {
                         div.addEventListener("mouseover", () => {
                             if(trigger === true){
                                 div.style.backgroundColor = `${color.value}`;
                             }
                            
                         })
                        
                     })
     })
    })

    //  container.addEventListener("click", () => {
         
    //     trigger = !trigger
    //     divs.forEach(div => {
    //         div.addEventListener("mouseover", () => {
    //             if(trigger === true){
    //                 div.style.backgroundColor = `${color.value}`;
    //             }
                
    //         })
            
    //     })
    //  })


 
    
     
     
    console.log(divs)

}
test()