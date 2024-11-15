const clickme = document.querySelector(".clickme");
let mypoint_number = document.querySelector(".mypoint_number");
let my_leage = document.querySelector(".my_leage");



let contents = 0;
clickme.addEventListener("click", function () {
    if (contents >= 0 && contents <= 10) {
        contents++;
    }
    mypoint_number.innerHTML = contents;
    if (contents >= 10 && contents <= 20) {
        my_leage.innerHTML = `silver`;
        contents = contents + 2
    }
    if (contents >= 20) {
        my_leage.innerHTML = `gold`;
        contents = contents + 3
    }


})