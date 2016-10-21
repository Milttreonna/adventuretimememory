var clicks = 0;
var firstchoice;
var secondchoice;
var choices = [];

var match = 0;
var backcard = "img/back.jpg";
var solved = [];

var faces = [];
faces[0] = 'img/bmo.gif';
faces[1] = 'img/bmo.gif';
faces[2] = 'img/bubblegum.gif';
faces[3] = 'img/bubblegum.gif';
faces[4] = 'img/cake.gif';
faces[5] = 'img/cake.gif';
faces[6] = 'img/finn.gif';
faces[7] = 'img/finn.gif';
faces[8] = 'img/fionna.gif';
faces[9] = 'img/fionna.gif';
faces[10] = 'img/gumball.gif';
faces[11] = 'img/gumball.gif';
faces[12] = 'img/iceking.gif';
faces[13] = 'img/iceking.gif';
faces[14] = 'img/treetrunks.gif';
faces[15] = 'img/treetrunks.gif';
faces[16] = 'img/jake.gif';
faces[17] = 'img/jake.gif';
faces[18] = 'img/lee.gif';
faces[19] = 'img/lee.gif';
faces[20] = 'img/lemongrab.gif';
faces[21] = 'img/lemongrab.gif';
faces[22] = 'img/lsp.gif';
faces[23] = 'img/lsp.gif';
faces[24] = 'img/marceline.gif';
faces[25] = 'img/marceline.gif';
faces[26] = 'img/rainicorn.gif';
faces[27] = 'img/rainicorn.gif';
faces[28] = 'img/fire2.gif';
faces[29] = 'img/fire2.gif';



function choose(card) {
    if (solved.includes(card)) {
        return;
    }
    if (choices.length === 0) {
        choices.push(card);
        document.images[choices[0]].src = faces[choices[0]];
    } else if (choices.length === 1 && card != choices[0]) {
        choices.push(card);
        document.images[choices[1]].src = faces[choices[1]];
        if (faces[choices[0]] === faces[choices[1]]) {
            solved.push(choices[0]);
            solved.push(choices[1]);
            match++;
            document.getElementById("matches").innerHTML = match;
            if (match === 15) {
                swal({
                    title: "Congratulations!",
                    text: "You're a true Adventurer!!",
                    imageUrl: "img/thumbs_up.png"
                }, function(){
                       location.reload();
                   } );
            }
        } else {
            var i = choices[0];
            var j = choices[1];
            setTimeout(function() {
                document.images[i].src = backcard;
                document.images[j].src = backcard;
            }, 500);
        }
        choices = [];
    }
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}
shuffle(faces);
