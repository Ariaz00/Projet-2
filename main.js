const prompt = require('prompt-sync')()

let tab = [
    {
        question: "1 - Quel jeu vidéo est souvent considéré comme le premier jeu vidéo jamais créé?",
        reponses: ["A) Ping ", "B) Pong ", "C) Street Fighter II ", "D) Super Mario 64 "],
        bonneReponse: "B",
    },
    {
        question: "2 - Dans quel jeu d'arène de bataille en ligne multijoueur (MOBA) les équipes s'affrontent-elles pour détruire la base ennemie?",
        reponses: ["A) Starcraft", "B) Dota 2", "C) League of Legends", "D) Pokémon Unite"],
        bonneReponse: "C",
    },
    {
        question: "3 - Dans quel jeu incarne-t-on le personnage de Geralt de Riv?",
        reponses: ["A) The Witcher", "B) Silent Hill", "C) Skyrim", "D) The last of Us Part II"],
        bonneReponse: "A",
    },
    {
        question: "4 - Sur quelle console est sorti le jeu GoldenEye 007?",
        reponses: ["A) GameCube", "B) Super Nintento", "C) Nintendo 64", "D) Game Boy Advance"],
        bonneReponse: "C",
    },
    {
        question: "5 - Quel jeu indépendant de 2018, développé par Matt Makes Games, met en scène une jeune femme grimpant une montagne?",
        reponses: ["A) Horizon ", "B) Tomb Raider", "C) Resident Evil 3", "D) Celeste"],
        bonneReponse: "D",
    },
    {
        question: "6 - Quel personnage de Street Fighter est connu pour son attaque Hadouken?",
        reponses: ["A) Guile", "B) Chun-Li", "C) Ryu", "D) M. Bison"],
        bonneReponse: "C",
    },
    {
        question: "7 - Quel personnage de Mortal Kombat est un dieu du tonnerre?",
        reponses: ["A) Johnny Cage", "B) Raiden", "C) Liu Kang", "D) Sonya Blade"],
        bonneReponse: "B",
    },
    {
        question: "8 - Quel est le vrai nom de Bowser, tel qu'il est connu au Japon?",
        reponses: ["A) Kamek","B) King Koopa","C) Bowser Koopa","D) Koopa"],
        bonneReponse: "D",
    },
    {
        question: "9 - Quelle est la date de sortie de la Nintendo DS en Europe?",
        reponses: ["A) 11 mars 2004","B) 11 mars 2005","C) 11 avril 2006","D) 11 avril 2007"],
        bonneReponse: "B",
    },
    {
        question: "10 - Quelle est la date de sortie de la PlayStation 1 en Europe?",
        reponses: ["A) 29 septembre 1995","B) 29 septembre 1996","C) 29 septembre 1997","D) 29 septembre 1998"],
        bonneReponse: "A",
    },

]
let count = 0


for (let i = 0; i < tab.length; i++) {
    console.log(tab[i].question);
    for (let j = 0; j < tab[i].reponses.length; j++) {
        console.log(tab[i].reponses[j]);
    }

    let rep = prompt ('Entrez la bonne réponse (A,B,C ou D :) ')
    while (rep!="A"&& rep!="B"&& rep!="C"&& rep!="D") { 
        console.log("Entrez une réponse valide");
        rep=prompt("")
    }
    if (rep === tab[i].bonneReponse) {
        console.log("Bonne réponse ! ");
        count++;
    } else {
        console.log("Mauvaise réponse !");
    }

}

console.log(`Vous avez obtenu ${count} bonnes réponses sur ${tab.length} questions`);
