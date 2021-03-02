let classNames = [
    'header', 'menu', 'menu-item', 'menu-item', 'menu-item', 'footer', 'menu', 'link', 'link', 'link', 'link',
]

function one() {
    let names = new Set (classNames)
    let nMas = [...names]
    console.log(nMas);
}


one()

//let result = ['link', 'menu-item', 'menu', 'header', 'footer']