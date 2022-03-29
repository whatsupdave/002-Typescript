const output2=document.getElementById("konvertavimas");
const btKonvertuoti=document.getElementById("konvertuoti");
let cm = <HTMLInputElement> document.getElementById("var_cm");

const coliai = (cm:number) => {
    return cm * 0.39370;
}

const skaiciuoti = () => {
    let centimetrai = cm.valueAsNumber;
    if(output2 != null){
        output2.innerHTML = '' + coliai(centimetrai)
    }
}

if(btKonvertuoti != null){
    btKonvertuoti.onclick = skaiciuoti;
}