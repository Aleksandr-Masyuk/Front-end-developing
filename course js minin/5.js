// обьекты

const person = {
    name: 'aleksandr',
    age: 25,
    isProgrammer: true,
    'complex key': 'complex value',
    ['key_' + (1 + 3)]: 'computed key',  // key_4
    greet() {
        console.log('greet from person');
    },
    info() {
        console.log(this);
        console.info('имя человека', this.name )
    }
}

// console.log(person.name)
// const ageKey = 'age'
// console.log(person[ageKey])
// console.log(person['complex key']);
// person.greet()

// const name = person.name
// const age = person.age

// const {name: namePerson, age} = person   // деструкторизация  // name: namePerson переименовали
// console.log(namePerson, age);


// for (let key in person) {  // for in опасен тем что заходит в прототип
//     if (person.hasOwnProperty(key)) {  //проходит только по собственным свойствам, не заходя в прототип
//         console.log('key: ', key);
//         console.log('value: ', person[key]);
//     }

// }


// Object.keys(person).forEach((key) => {
//     console.log('key:', key);
//     console.log('value:', person[key]);
// })


// контекст

const logger = {
    keys() {
        console.log('Object Keys', Object.keys(this));
    }
}

logger.keys(person)
