/*
const main = document.getElementById('main')
let tour = true
function createTable(target)
{
    const table = document.createElement('table');
    for (let y = 0; y < 6; y++) {
        const tr = document.createElement('tr')
        for (let x = 0; x < 7; x++) {
            const td = document.createElement('td')
            td.value = 0
            td.id = y + ':' + x
            td.addEventListener('click', putCoin)
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
    target.appendChild(table);
}

function putCoin(event) {
    const td = event.target
    const column = td.id.charAt(2)
    let line = 5
    let jeton = null
    while (line >= 0 &&
    (jeton = document.getElementById(line + ':' + column)).value !== 0) {
        line -= 1;
    }
    jeton.value = tour
    const coin = document.createElement('div')
    jeton.appendChild(coin)
    coin.classList.add('coin', tour ? 'red' : 'yellow')
    gameOver(line, column)
    // Inversion de boolean
    tour = !tour
}

function gameOver(line, column) {
    console.log(`${line}:${column}`)
    console.log(document.getElementById(`${line}:${column}`).value, 'VALUE')
    function verticalFour() {
        let count = 0
        let y = line;
        while (y > 1 && y <= 5 && document.getElementById(`${y++}:${column}`).value === tour) {
            count++;
        }
        return count >= 4;
    }

    function horizontalFour() {
        return false;
    }

    function diagoRightFour() {
        return false;
    }

    function diagoLeftFour() {
        return false;
    }

    const isWin = verticalFour() || horizontalFour() || diagoRightFour() || diagoLeftFour()
    isWin && alert(tour ? "Joueur 1 " : "Joueur 2")
}

createTable(main)*/
/*

const main = document.getElementById('main');
let tour = true;

function createTable(target) {
    const table = document.createElement('table');
    for (let y = 0; y < 6; y++) {
        const tr = document.createElement('tr');
        for (let x = 0; x < 7; x++) {
            const td = document.createElement('td');
            td.value = 0;
            td.id = y + ':' + x;
            td.addEventListener('click', putCoin);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    target.appendChild(table);
}

function putCoin(event) {
    const td = event.target;
    const column = td.id.charAt(2);
    let line = 5;
    let jeton = null;
    while (line >= 0 && (jeton = document.getElementById(line + ':' + column)).value !== 0) {
        line -= 1;
    }
    jeton.value = tour ? 1 : 2; // Utilisation de 1 pour Joueur 1 (Rouge) et 2 pour Joueur 2 (Jaune)
    const coin = document.createElement('div');
    jeton.appendChild(coin);
    coin.classList.add('coin', tour ? 'red' : 'yellow');
    gameOver(parseInt(line), parseInt(column));
    // Inversion de boolean
    tour = !tour;
}

function gameOver(line, column) {
    console.log(`${line}:${column}`);
    console.log(document.getElementById(`${line}:${column}`).value, 'VALUE');

    function checkDirection(dx, dy) {
        let count = 1; // Compte le jeton actuel
        let currentLine = line + dy;
        let currentColumn = column + dx;

        // Vérifie vers la droite
        while (currentColumn >= 0 && currentColumn < 7 && currentLine >= 0 && currentLine < 6 &&
        document.getElementById(`${currentLine}:${currentColumn}`).value === (tour ? 1 : 2)) {
            count++;
            currentLine += dy;
            currentColumn += dx;
        }

        // Vérifie vers la gauche
        currentLine = line - dy;
        currentColumn = column - dx;
        while (currentColumn >= 0 && currentColumn < 7 && currentLine >= 0 && currentLine < 6 &&
        document.getElementById(`${currentLine}:${currentColumn}`).value === (tour ? 1 : 2)) {
            count++;
            currentLine -= dy;
            currentColumn -= dx;
        }

        return count >= 4;
    }

    function verticalFour() {
        return checkDirection(0, 1);
    }

    function horizontalFour() {
        return checkDirection(1, 0);
    }

    function diagoRightFour() {
        return checkDirection(1, 1);
    }

    function diagoLeftFour() {
        return checkDirection(1, -1);
    }

    const isWin = verticalFour() || horizontalFour() || diagoRightFour() || diagoLeftFour();

    if (isWin) {
        // Retarde l'affichage de l'alerte
        setTimeout(function() {
            alert(tour ? "Joueur Jaune a gagné!" : "Joueur Rouge a gagné!");
        }, 1000);
    }
}

createTable(main);
*/

// Définition de la zone principale du jeu
const main = document.getElementById('main');

// Variable pour suivre le tour du joueur (true : Joueur Rouge, false : Joueur Jaune)
let tour = true;

// Fonction pour créer la grille de jeu
function createTable(target) {
    const table = document.createElement('table');
    for (let y = 0; y < 6; y++) {
        const tr = document.createElement('tr');
        for (let x = 0; x < 7; x++) {
            const td = document.createElement('td');
            td.value = 0;  // Valeur par défaut de la cellule (0 : vide)
            td.id = y + ':' + x;
            td.addEventListener('click', putCoin);  // Ajoute un écouteur d'événement au clic
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    target.appendChild(table);
}

// Fonction pour placer un jeton lorsqu'une cellule est cliquée
function putCoin(event) {
    const td = event.target;
    const column = td.id.charAt(2);
    let line = 5;
    let jeton = null;

    // Trouve la première cellule vide dans la colonne
    while (line >= 0 && (jeton = document.getElementById(line + ':' + column)).value !== 0) {
        line -= 1;
    }

    // Place le jeton dans la cellule
    jeton.value = tour ? 1 : 2;  // Utilisation de 1 pour Joueur Rouge et 2 pour Joueur Jaune
    const coin = document.createElement('div');
    jeton.appendChild(coin);
    coin.classList.add('coin', tour ? 'red' : 'yellow');  // Ajoute une classe pour la couleur du jeton
    gameOver(parseInt(line), parseInt(column));  // Vérifie si le joueur a gagné
    // Inversion du tour pour passer au joueur suivant
    tour = !tour;
}

// Fonction appelée lorsque le jeu est terminé (quelqu'un a gagné ou la grille est pleine)
function gameOver(line, column) {
    console.log(`${line}:${column}`);
    console.log(document.getElementById(`${line}:${column}`).value, 'VALUE');

    const player = tour ? 1 : 2;  // Identifie le joueur actuel

    // Vérifie s'il y a une victoire
    if (checkVictory(player)) {
        // Retarde l'affichage de l'alerte pour laisser le temps à l'animation du dernier jeton
        setTimeout(function() {
            alert(player === 1 ? "Joueur Rouge a gagné!" : "Joueur Jaune a gagné!");
        }, 1000);
    }
}

// Fonction pour vérifier la victoire en parcourant chaque cellule
function checkVictory(player) {
    // Parcoure chaque cellule pour vérifier la victoire
    for (let y = 0; y < 6; y++) {
        for (let x = 0; x < 7; x++) {
            // Vérifie dans toutes les directions si un alignement de 4 jetons du même joueur est trouvé
            if (checkDirection(x, y, 1, 0, player) ||  // Horizontal
                checkDirection(x, y, 0, 1, player) ||  // Vertical
                checkDirection(x, y, 1, 1, player) ||  // Diagonale droite
                checkDirection(x, y, 1, -1, player)) { // Diagonale gauche
                return true;  // Retourne vrai si une victoire est trouvée
            }
        }
    }
    return false;  // Retourne faux si aucune victoire n'est trouvée
}

// Fonction pour vérifier une direction spécifique à partir d'une cellule donnée
function checkDirection(x, y, dx, dy, player) {
    // Compte le nombre de jetons alignés dans une direction spécifique
    let count = 0;
    while (x >= 0 && x < 7 && y >= 0 && y < 6 &&
    document.getElementById(`${y}:${x}`).value === player) {
        count++;
        x += dx;
        y += dy;
    }
    return count >= 4;  // Retourne vrai si au moins 4 jetons alignés sont trouvés
}

// Appelle la fonction pour créer la grille au démarrage du jeu
createTable(main);
