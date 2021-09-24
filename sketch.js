var txt;

function preload() {
    var txt = loadStrings("words.txt");
}

function setup() {
    noCanvas();
    //console.log(txt);
    //let stBesed = Math.random(15) + 1;
    var words = split(txt, ' ')

    for (var i = 0; i < words.lenght; i++) {
        createP(words[i]);
    }
    //createP(join(txt, "<br/>"));
}
