// асинхронность

// const timeout = setTimeout(() => {

//     console.log('After timeout');
// }, 2500)
//clearTimeout()

// const interval = setInterval(() => {
    
//     console.log('After interval');
// }, 1000)
// clearInterval()

// const delay = (callback, wait = 1000) => {
//     setTimeout(callback, wait)
// }

// delay( () => {
//     console.log('2 seconds');
// }, 2000)

const delay = (wait) => {
   const promise =  new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve()  // reject выведет ошибку
        }, wait)
    })
    return promise
}

// delay(2500)
//     .then( () => {
//         console.log('2 seconds');
//     })
//     .catch( err => console.error(err))
//     .finally( () => console.log('finally'))


const getData = () => new Promise( resolve => resolve([
    1, 1, 2, 3, 5, 8, 13
]))

// getData().then(data => console.log(data))

async function asyncExample() {        // async делает функцию асинхронной
    await delay(3000)
    const data =  await getData()
    console.log('data', data);
}

asyncExample()