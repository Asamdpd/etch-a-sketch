const size = document.querySelector('input[id="size"]');
const pointsLabel = document.querySelector('label[id="pointsLabel"]')
const container = document.querySelector('div[class="container"]')
let divs

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

    
    
    document.querySelectorAll('.square').forEach(e => e.remove());
    for(i = 0; i < size.value; i++){
        for(y = 0; y < size.value; y++){
           container.appendChild(document.createElement("div")) ;
        }
    }   
    
    
     divs = container.querySelectorAll(":scope > div")
     divs.forEach(div => {
         div.classList.add("square")
         addEventListener("click", (e) => {
             console.log(e.pointerId)
             
         })
         
     })
    console.log(divs)

}

test()