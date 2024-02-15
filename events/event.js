let image =document.getElementById("samsung")
let btn =document.querySelector('.button')
let divE =document.querySelector('.details')
console.log(image);
console.log("hello");
btn.addEventListener("click", (event) => {
    console.log("fu");
})

image.addEventListener("mouseover", (event) => {
    divE.innerHTML="<p>NAme:samsung</p><p>Vesrion s23</p> "
})
