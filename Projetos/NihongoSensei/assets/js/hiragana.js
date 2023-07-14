var romanji = ["a","i","u","e","o","ka","ki","ku","ke","ko","sa","shi","su","se","so","ta","tchi","tsu","te","to","na","ni","nu","ne","no","ha","hi","fu","he","ho","ma","mi","mu","me","mo","ya","yu","yo","ra","ri","ru","re","ro","wa","wo","n"]

var hRandom = ["あ","い","う","え","お","か","き","く","け","こ","さ","し","す","せ","そ","た","ち","つ","て","と","に","な","に","ぬ","ね","の","は","ひ","ふ","へ","ほ","ま","る","み","む","め","も","や","ゆ","よ","ら","り","る","れ","ろ","わ","を","ん"]

var checklistR = {"a": "あ","i": "い","u": "う","e": "え","o": "お","ka": "か","ki": "き","ku": "く","ke": "け","ko": "こ","sa": "さ","shi": "し","su": "す","se": "せ","so": "そ","ta": "た","tchi": "ち","tsu": "つ","te": "て","to": "と","na": "な","ni": "に","nu": "ぬ","ne": "ね","no": "の","ha": "は","hi": "ひ","fu": "ふ","he": "へ","ho": "ほ","ma": "ま","mi": "み","mu": "む","me": "め","mo": "も","ya": "や","yu": "ゆ","yo": "よ","ra": "ら","ri": "り","ru": "る","re": "れ","ro": "ろ","wa": "わ","wo": "を","n": "ん"
}

var checklistH = Object.fromEntries(
    Object
      .entries(checklistR)
      .map(([key, value]) => [value, key])
  );


// Representação

var rep = document.getElementById('rep');


// Buttons

var btn1 = document.getElementById('btn1')

var btn2 = document.getElementById('btn2')

var btn3 = document.getElementById('btn3')

var btn4 = document.getElementById('btn4')

var certainBtn;



var pergunta = "";
var resposta = "";

var rValue;

var random = Math.random()

var rButtons = document.getElementsByClassName('rd')

var btnN = Math.ceil(Math.random() * rButtons.length)

var opT = [];
var possibleOpt = romanji

var pontuacao = 0;


console.log(btnN)

certainBtn = document.getElementById(`btn${btnN}`)

function randomH() {
    rValue = Math.floor(Math.random() * hRandom.length)

    return rValue

}

function randomR() {
    rValue = Math.floor(Math.random() * romanji.length)

    return rValue
}

function correctBTN() {
    pontuacao++
    console.log(pontuacao)
    alert(`Sua pontuação atual é: ${pontuacao}`)
    startR()
}

function startR() {

random




if(random < 0.5) {
    rep.innerHTML = hRandom[randomH()]
    
    pergunta = hRandom[rValue]

    if(checklistH.hasOwnProperty(pergunta)) {
        resposta = checklistH[pergunta]}

        opT.push(resposta)

        for(var x = 0;x < 3; x++) {
                possibleOpt = possibleOpt.filter(item => item !== opT[x])

                opT.push(possibleOpt[randomR()])

        }

        console.log(opT)
        console.log(possibleOpt)
        console.log(resposta)



    for(var x = 0;x < rButtons.length; x++) {

        


        if(certainBtn.innerHTML !== resposta) {
            certainBtn.innerHTML = resposta.toUpperCase()
        } 

    }

    console.log(hRandom[rValue])

} else {
    rep.innerHTML = romanji[randomR()]

    pergunta = romanji[rValue]

    if(checklistR.hasOwnProperty(pergunta)) {
        resposta = checklistR[pergunta]}

    console.log(resposta)
        
}
}

startR()