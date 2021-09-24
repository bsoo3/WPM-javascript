var txt;

function preload() {
    txt = loadStrings("words.txt");
}

function setup() {
    noCanvas();
    //console.log(txt);
    createP(join(txt, "<br/>"));
}