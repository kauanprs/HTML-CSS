
this.opc;

let hiragana = document.getElementById('hiragana')

let katakana = document.getElementById('katakana')

let spanOP = document.getElementById('op')

let msg = document.getElementById('opt')



console.log(this.opc)

function iniciar() {
    if(this.opc == 1) {
        location.href = "./pages/hiragana/main.html"
    } 

    if(this.opc == 2) {
        location.href = "./pages/katakana/main.html"
    }
}

function h(){
    console.log("hiragana")
    this.opc = 1;
    console.log(this.opc)
    spanOP.innerHTML = "Hiragana"
    if(!msg.classList.contains('hider')) {
        msg.classList.add("hider")
    }
}

function k(){
    console.log("katakana")
    this.opc = 2;
    console.log(this.opc)
    spanOP.innerHTML = "Katakana"

    if(!msg.classList.contains('hider')) {
        msg.classList.add("hider")
    }
    
}







