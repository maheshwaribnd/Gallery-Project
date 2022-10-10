const panels = document.querySelectorAll('.box')

// var x = panels[0].classList
// console.log(x);

panels.forEach(box =>{
    box.addEventListener("click" , function(){
        removeActiveClasses();
        box.classList.add("active")
    })
})

function removeActiveClasses(){
    panels.forEach(box =>{
        box.classList.remove("active")
    })
}