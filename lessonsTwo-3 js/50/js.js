let textInput = document.querySelector("#text-input");

const key = {
    h : "t",
    e : "y",
    l : "k",
    o : "1"
};

document.querySelector("button").onclick = () => {
    let str = textInput.value;
    let str2 = "";
    
    for (let i = 0; i < str.length; i++) {
        if (key [str[i]]) {
            str2 += key[str[i]];
        }
        else {
            str2 += [str[i]];
        }
    }
    document.querySelector("#out").textContent = str2;
}