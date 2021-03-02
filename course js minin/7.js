// DOM

const heading = document.getElementById("hello");
// console.dir(heading.textContent);
const heading2 = document.querySelector('h2')
// const heading3 = heading2.nextElementSibling  //следующий элемент
//console.log('heading3');

const h2List = document.querySelectorAll('h2')
console.log(h2List);
const heading3 = h2List[1]
console.log(heading3);

setTimeout( () => {
    addStyles(heading, 'практика js', 'red', '30px')
}, 1500)

setTimeout(() => {
    addStyles(heading2, '2020', 'yellow', '50px' )
}, 2000)

const link = heading3.querySelector('a')
link.addEventListener('click', (event) => {
    event.preventDefault()  //событие выполняется но дейтвий не седует(переход по ссылке)
    console.log(event);
    const url = event.target.getAttribute('href') // присвоение ссылки атрибуту
    window.location = url
})

setTimeout(() => {
    addStyles(link, 'начало', 'blue', '70px')
}, 3000);


function addStyles(node, text, color = 'red', fontSize) {
    node.textContent = text
    node.style.color = color
    node.style.fontSize = fontSize
    node.style.textAlign = "center"
    node.style.background = "black"
    node.style.padding = '3rem'
    node.style.display = 'block'
    node.style.width = '100%'
}

heading.onclick = () => {
    stl(heading)
}

function stl (cl) {
    cl.style.background = 'green'
    cl.style.color = 'white'
}

heading2.onclick = () => {
    if (heading2.style.color === 'yellow')
    heading2.style.color = 'black'
    heading2.style.background = 'blue'
}

heading2.addEventListener('dblclick', () => {
    heading2.style.background = 'red'
})