var output2 = document.getElementById("konvertavimas");
var btKonvertuoti = document.getElementById("konvertuoti");
var cm = document.getElementById("var_cm");
var coliai = function (cm) {
    return cm * 0.39370;
};
var skaiciuoti = function () {
    var centimetrai = cm.valueAsNumber;
    if (output2 != null) {
        output2.innerHTML = '' + coliai(centimetrai);
    }
};
if (btKonvertuoti != null) {
    btKonvertuoti.onclick = skaiciuoti;
}
