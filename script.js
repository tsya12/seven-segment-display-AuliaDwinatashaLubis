const OP = document.querySelectorAll('.seven-segment div');
const tabel = document.querySelectorAll('table tbody td');

//Assuming mati and nyala are CSS classes
const mati = 'mati'; // Define the mati class
const nyala = 'nyala' //Define the nyala class

// call the function to set initial values
setInitialValues()

function UbahWarna() {
    tabel[0].innerHTML = "0";
    tabel[1].innerHTML = "0";
    tabel[2].innerHTML = "0";
    tabel[3].innerHTML = "0";

    //seven segment
    tabel[4].innerHTML = "1";
    tabel[5].innerHTML = "1";
    tabel[6].innerHTML = "1";
    tabel[7].innerHTML = "0";
    tabel[8].innerHTML = "1";
    tabel[9].innerHTML = "1";
    tabel[10].innerHTML = "1";
    tabel[11].innerHTML = "0";

    OP[0].setAttribute('style', 'background-color: rgba(104, 1, 1, 0.938)'); //Replace with your actual styles
    OP[1].setAttribute('style', 'background-color: rgba(104, 1, 1, 0.938)'); //Replace with your actual styles
    OP[2].setAttribute('style', 'background-color: rgba(104, 1, 1, 0.938)'); //Replace with your actual styles
    OP[3].setAttribute('style', 'background-color: hitam'); //Replace with your actual styles
    OP[4].setAttribute('style', 'background-color: rgba(104, 1, 1, 0.938)'); //Replace with your actual styles
    OP[5].setAttribute('style', 'background-color: rgba(104, 1, 1, 0.938)'); //Replace with your actual styles
    OP[6].setAttribute('style', 'background-color: rgba(104, 1, 1, 0.938)'); //Replace with your actual styles
}

function UbahWarna1 () {
    tabel[0].innerHTML = "0";
    tabel[1].innerHTML = "0";
    tabel[2].innerHTML = "0";
    tabel[3].innerHTML = "1";

    //seven segment
    tabel[4].innerHTML = "0";
    tabel[5].innerHTML = "0";
    tabel[6].innerHTML = "1";
    tabel[7].innerHTML = "0";
    tabel[8].innerHTML = "0";
    tabel[9].innerHTML = "0";
    tabel[10].innerHTML = "1";
    tabel[11].innerHTML = "1";

    OP[0].setAttribute('style', 'background-color: hitam'); //Replace with your actual styles
    OP[1].setAttribute('style', 'background-color: hitam'); //Replace with your actual styles
    OP[2].setAttribute('style', 'background-color: rgba(104, 1, 1, 0.938)'); //Replace with your actual styles
    OP[3].setAttribute('style', 'background-color: hitam'); //Replace with your actual styles
    OP[4].setAttribute('style', 'background-color: hitam'); //Replace with your actual styles
    OP[5].setAttribute('style', 'background-color: hitam'); //Replace with your actual styles
    OP[6].setAttribute('style', 'background-color: rgba(104, 1, 1, 0.938)'); //Replace with your actual styles
}
function UbahWarna2() {
    tabel[0].innerHTML = "0";
    tabel[1].innerHTML = "0";
    tabel[2].innerHTML = "1";
    tabel[3].innerHTML = "0";

    //seven segment
    tabel[4].innerHTML = "0";
    tabel[5].innerHTML = "1";
    tabel[6].innerHTML = "1";
    tabel[7].innerHTML = "1";
    tabel[8].innerHTML = "1";
    tabel[9].innerHTML = "1";
    tabel[10].innerHTML = "0";
    tabel[11].innerHTML = "2";

    OP[0].setAttribute('style', 'background-color: hitam'); //Replace with your actual styles
    OP[1].setAttribute('style', 'background-color: rgba(104, 1, 1, 0.938)'); //Replace with your actual styles
    OP[2].setAttribute('style', 'background-color: rgba(104, 1, 1, 0.938)'); //Replace with your actual styles
    OP[3].setAttribute('style', 'background-color: rgba(104, 1, 1, 0.938)'); //Replace with your actual styles
    OP[4].setAttribute('style', 'background-color: rgba(104, 1, 1, 0.938)'); //Replace with your actual styles
    OP[5].setAttribute('style', 'background-color: rgba(104, 1, 1, 0.938)'); //Replace with your actual styles
    OP[6].setAttribute('style', 'background-color: hitam'); //Replace with your actual styles
}
function UbahWarna3() {
    tabel[0].innerHTML = "0";
    tabel[1].innerHTML = "0";
    tabel[2].innerHTML = "1";
    tabel[3].innerHTML = "1";

    //seven segment
    tabel[4].innerHTML = "0";
    tabel[5].innerHTML = "1";
    tabel[6].innerHTML = "1";
    tabel[7].innerHTML = "1";
    tabel[8].innerHTML = "0";
    tabel[9].innerHTML = "1";
    tabel[10].innerHTML = "1";
    tabel[11].innerHTML = "3";

    OP[0].setAttribute('style', 'background-color: hitam'); //Replace with your actual styles
    OP[1].setAttribute('style', 'background-color: rgba(104, 1, 1, 0.938)'); //Replace with your actual styles
    OP[2].setAttribute('style', 'background-color: rgba(104, 1, 1, 0.938)'); //Replace with your actual styles
    OP[3].setAttribute('style', 'background-color: rgba(104, 1, 1, 0.938)'); //Replace with your actual styles
    OP[4].setAttribute('style', 'background-color: hitam'); //Replace with your actual styles
    OP[5].setAttribute('style', 'background-color: rgba(104, 1, 1, 0.938)'); //Replace with your actual styles
    OP[6].setAttribute('style', 'background-color: rgba(104, 1, 1, 0.938)'); //Replace with your actual styles
}
function UbahWarna4() {
    tabel[0].innerHTML = "0";
    tabel[1].innerHTML = "1";
    tabel[2].innerHTML = "0";
    tabel[3].innerHTML = "0";

    //seven segment
    tabel[4].innerHTML = "1";
    tabel[5].innerHTML = "0";
    tabel[6].innerHTML = "1";
    tabel[7].innerHTML = "1";
    tabel[8].innerHTML = "0";
    tabel[9].innerHTML = "0";
    tabel[10].innerHTML = "1";
    tabel[11].innerHTML = "4";

    OP[0].setAttribute('style', 'background-color: rgba(104, 1, 1, 0.938)'); //Replace with your actual styles
    OP[1].setAttribute('style', 'background-color: hitam'); //Replace with your actual styles
    OP[2].setAttribute('style', 'background-color: rgba(104, 1, 1, 0.938)'); //Replace with your actual styles
    OP[3].setAttribute('style', 'background-color: rgba(104, 1, 1, 0.938)'); //Replace with your actual styles
    OP[4].setAttribute('style', 'background-color: hitam'); //Replace with your actual styles
    OP[5].setAttribute('style', 'background-color: hitam'); //Replace with your actual styles
    OP[6].setAttribute('style', 'background-color: rgba(104, 1, 1, 0.938)'); //Replace with your actual styles
}
function UbahWarna5() {
    tabel[0].innerHTML = "0";
    tabel[1].innerHTML = "1";
    tabel[2].innerHTML = "0";
    tabel[3].innerHTML = "1";

    //seven segment
    tabel[4].innerHTML = "1";
    tabel[5].innerHTML = "1";
    tabel[6].innerHTML = "0";
    tabel[7].innerHTML = "1";
    tabel[8].innerHTML = "0";
    tabel[9].innerHTML = "1";
    tabel[10].innerHTML = "1";
    tabel[11].innerHTML = "5";

    OP[0].setAttribute('style', 'background-color: rgba(104, 1, 1, 0.938)'); //Replace with your actual styles
    OP[1].setAttribute('style', 'background-color: rgba(104, 1, 1, 0.938)'); //Replace with your actual styles
    OP[2].setAttribute('style', 'background-color: hitam'); //Replace with your actual styles
    OP[3].setAttribute('style', 'background-color: rgba(104, 1, 1, 0.938)'); //Replace with your actual styles
    OP[4].setAttribute('style', 'background-color: hitam'); //Replace with your actual styles
    OP[5].setAttribute('style', 'background-color: rgba(104, 1, 1, 0.938)'); //Replace with your actual styles
    OP[6].setAttribute('style', 'background-color: rgba(104, 1, 1, 0.938)'); //Replace with your actual styles
}
function UbahWarna6() {
    tabel[0].innerHTML = "0";
    tabel[1].innerHTML = "1";
    tabel[2].innerHTML = "1";
    tabel[3].innerHTML = "0";

    //seven segment
    tabel[4].innerHTML = "1";
    tabel[5].innerHTML = "1";
    tabel[6].innerHTML = "0";
    tabel[7].innerHTML = "1";
    tabel[8].innerHTML = "1";
    tabel[9].innerHTML = "1";
    tabel[10].innerHTML = "1";
    tabel[11].innerHTML = "6";

    OP[0].setAttribute('style', 'background-color: rgba(104, 1, 1, 0.938)'); //Replace with your actual styles
    OP[1].setAttribute('style', 'background-color: rgba(104, 1, 1, 0.938)'); //Replace with your actual styles
    OP[2].setAttribute('style', 'background-color: hitam'); //Replace with your actual styles
    OP[3].setAttribute('style', 'background-color: rgba(104, 1, 1, 0.938)'); //Replace with your actual styles
    OP[4].setAttribute('style', 'background-color: rgba(104, 1, 1, 0.938)'); //Replace with your actual styles
    OP[5].setAttribute('style', 'background-color: rgba(104, 1, 1, 0.938)'); //Replace with your actual styles
    OP[6].setAttribute('style', 'background-color: rgba(104, 1, 1, 0.938)'); //Replace with your actual styles
}
function UbahWarna7() {
    tabel[0].innerHTML = "0";
    tabel[1].innerHTML = "1";
    tabel[2].innerHTML = "1";
    tabel[3].innerHTML = "1";

    //seven segment
    tabel[4].innerHTML = "0";
    tabel[5].innerHTML = "1";
    tabel[6].innerHTML = "1";
    tabel[7].innerHTML = "0";
    tabel[8].innerHTML = "0";
    tabel[9].innerHTML = "0";
    tabel[10].innerHTML = "1";
    tabel[11].innerHTML = "7";

    OP[0].setAttribute('style', 'background-color: hitam'); //Replace with your actual styles
    OP[1].setAttribute('style', 'background-color: rgba(104, 1, 1, 0.938)'); //Replace with your actual styles
    OP[2].setAttribute('style', 'background-color: rgba(104, 1, 1, 0.938)'); //Replace with your actual styles
    OP[3].setAttribute('style', 'background-color: hitam'); //Replace with your actual styles
    OP[4].setAttribute('style', 'background-color: hitam'); //Replace with your actual styles
    OP[5].setAttribute('style', 'background-color: hitam)'); //Replace with your actual styles
    OP[6].setAttribute('style', 'background-color: rgba(104, 1, 1, 0.938)'); //Replace with your actual styles
}
function UbahWarna8() {
    tabel[0].innerHTML = "1";
    tabel[1].innerHTML = "0";
    tabel[2].innerHTML = "0";
    tabel[3].innerHTML = "0";

    //seven segment
    tabel[4].innerHTML = "1";
    tabel[5].innerHTML = "1";
    tabel[6].innerHTML = "1";
    tabel[7].innerHTML = "1";
    tabel[8].innerHTML = "1";
    tabel[9].innerHTML = "1";
    tabel[10].innerHTML = "1";
    tabel[11].innerHTML = "8";

    OP[0].setAttribute('style', 'background-color: rgba(104, 1, 1, 0.938)'); //Replace with your actual styles
    OP[1].setAttribute('style', 'background-color: rgba(104, 1, 1, 0.938)'); //Replace with your actual styles
    OP[2].setAttribute('style', 'background-color: rgba(104, 1, 1, 0.938)'); //Replace with your actual styles
    OP[3].setAttribute('style', 'background-color: rgba(104, 1, 1, 0.938)'); //Replace with your actual styles
    OP[4].setAttribute('style', 'background-color: rgba(104, 1, 1, 0.938)'); //Replace with your actual styles
    OP[5].setAttribute('style', 'background-color: rgba(104, 1, 1, 0.938)'); //Replace with your actual styles
    OP[6].setAttribute('style', 'background-color: rgba(104, 1, 1, 0.938)'); //Replace with your actual styles
}
function UbahWarna9() {
    tabel[0].innerHTML = "1";
    tabel[1].innerHTML = "0";
    tabel[2].innerHTML = "0";
    tabel[3].innerHTML = "1";

    //seven segment
    tabel[4].innerHTML = "1";
    tabel[5].innerHTML = "1";
    tabel[6].innerHTML = "1";
    tabel[7].innerHTML = "1";
    tabel[8].innerHTML = "0";
    tabel[9].innerHTML = "1";
    tabel[10].innerHTML = "1";
    tabel[11].innerHTML = "9";

    OP[0].setAttribute('style', 'background-color: rgba(104, 1, 1, 0.938)'); //Replace with your actual styles
    OP[1].setAttribute('style', 'background-color: rgba(104, 1, 1, 0.938)'); //Replace with your actual styles
    OP[2].setAttribute('style', 'background-color: rgba(104, 1, 1, 0.938)'); //Replace with your actual styles
    OP[3].setAttribute('style', 'background-color: rgba(104, 1, 1, 0.938)'); //Replace with your actual styles
    OP[4].setAttribute('style', 'background-color: hitam'); //Replace with your actual styles
    OP[5].setAttribute('style', 'background-color: rgba(104, 1, 1, 0.938)'); //Replace with your actual styles
    OP[6].setAttribute('style', 'background-color: rgba(104, 1, 1, 0.938)'); //Replace with your actual styles
}
function UbahWarnaReset() {
    tabel[0].innerHTML = " ";
    tabel[1].innerHTML = " ";
    tabel[2].innerHTML = " ";
    tabel[3].innerHTML = " ";

    //seven segment
    tabel[4].innerHTML = " ";
    tabel[5].innerHTML = " ";
    tabel[6].innerHTML = " ";
    tabel[7].innerHTML = " ";
    tabel[8].innerHTML = " ";
    tabel[9].innerHTML = " ";
    tabel[10].innerHTML = " ";
    tabel[11].innerHTML = " ";

    OP[0].setAttribute('style', 'background-color: hitam'); //Replace with your actual styles
    OP[1].setAttribute('style', 'background-color: hitam'); //Replace with your actual styles
    OP[2].setAttribute('style', 'background-color: hitam'); //Replace with your actual styles
    OP[3].setAttribute('style', 'background-color: hitam'); //Replace with your actual styles
    OP[4].setAttribute('style', 'background-color: hitam'); //Replace with your actual styles
    OP[5].setAttribute('style', 'background-color: hitam'); //Replace with your actual styles
    OP[6].setAttribute('style', 'background-color: hitam'); //Replace with your actual styles
}

//Call the function
UbahWarna();
