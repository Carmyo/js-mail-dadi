// genera numero per cpu
let cpushot = Math.floor(Math.random() * 6 + 1);
// genera numero per giocatore
let playershot = Math.floor(Math.random() * 6 + 1);
// se cpu più alto allora cpu vince
// se cpu uguale giocatore allora cpu vince 
// altrimenti giocatore vince
let win
if (cpushot > playershot) {
    win = 'YOU LOSE'
}
else if (cpushot === playershot) {
    win = 'YOU LOSE'
} else {
    win = 'YOU WIN'
}


/*if (playershot > cpushot) {
    win = 'YOU WIN';
} else {
    win = 'YOU LOSE'
}*/

console.log(cpushot);
console.log(playershot);
console.log(win);







