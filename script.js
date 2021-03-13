let hangman = {
    guesses: 6,
    dictionary: ["medis", "televizorius", "medalis", "sausainis", "traktoristas"],

    word: null,
    wordlen: 0,
    rights: 0,
    wrongs: 0,

    hImg: null,
    hWord: null,
    hChar: null,
    hLives: null,


    init: function () {
        hangman.hImg = document.getElementById("hangman-img");
        hangman.hWord = document.getElementById("hangman-words");
        hangman.hChar = document.getElementById("hangman-char");
        hangman.hLives = document.getElementById("hangman-lives");


        for (let i = 65; i < 91; i++) {
            let charnow = document.createElement("input");
            charnow.type = "button";
            charnow.value = String.fromCharCode(i);
            charnow.disabled = true;
            charnow.addEventListener("click", hangman.check);
            hangman.hChar.appendChild(charnow);
        }
        let rst = document.getElementById("hangman-reset");
        rst.addEventListener("click", hangman.reset);
        rst.disabled = false;
        hangman.reset();
    },

}
