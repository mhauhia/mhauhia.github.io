//Javascript document
var sizeClick = '';
function increaseFontSize() {
    console.log("increaseFontSize");

    increaseFontSize.onClick
    sizeClick++
    if (sizeClick == 1) {
        lista.style.fontSize = '20px'
    } else if (sizeClick == 2) {
        lista.style.fontSize = '24px'
    } else if (sizeClick == 3) {
        lista.style.fontSize = '28px'
    } else if (sizeClick == 4) {
        lista.style.fontSize = '32px'
    } else {
        lista.style.fontSize = '20px'
    }
}

var typeClick = "";
console.log("changeFontType");
function changeFontType() {


    changeFontType.onClick
    typeClick++
    if (typeClick == 1) {
        lista.style.fontFamily = 'Roboto'
    } else if (typeClick == 2) {
        lista.style.fontFamily = 'Mansalva'
    } else if (typeClick == 3) {
        lista.style.fontFamily = 'Grenze'
    } else if (typeClick == 4) {
        lista.style.fontFamily = 'Turret Road'
    } else {
        lista.style.fontFamily = 'Courier New'
    }

}

var resetButton = document.getElementById("nappula3");
resetButton.onClick = reloadPage;
console.log("reloadPage");
function reloadPage(){
   //window.location.reload();
   location.reload();
    return false;
}
