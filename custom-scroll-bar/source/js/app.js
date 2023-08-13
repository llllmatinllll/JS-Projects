// DOM => Document Object Model
// BOM => Browser Object Model

let customScroll = document.querySelector('#scroll')

window.addEventListener('scroll',  ()=> {
    
    let scrollTop = window.scrollY

    let documentHeight = document.body.clientHeight

    let windowHeight = window.innerHeight

    let scrollPercent = scrollTop / (documentHeight - windowHeight)

    let scrollPercentRounded = Math.round(scrollPercent * 100)

    customScroll.style.width = scrollPercentRounded + '%'

    console.log(scrollPercentRounded);
})