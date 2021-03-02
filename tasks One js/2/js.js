function iWantToGet(ammountReqquired) {
    const availlableNotes = [100, 50, 20, 10]
    const result = []

    if (ammountReqquired > 0 ) {
        for (let i = 0; i < availlableNotes.length; i++) {
            let note = availlableNotes[i]

            while (ammountReqquired - note >= 0) {
                ammountReqquired -= note
                result.push(note)
            }
        }
    } else {
        console.log('Pls enter new amount');
    }

    return result
}

console.log(iWantToGet(160));