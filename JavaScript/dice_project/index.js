dice = [
  "./images/dice1.png",
  "./images/dice2.png",
  "./images/dice3.png",
  "./images/dice4.png",
  "./images/dice5.png",
  "./images/dice6.png"
];

let imgIndex1 = Math.floor(Math.random() * 6)
let imgIndex2 = Math.floor(Math.random() * 6)

let imgSource1 = dice[imgIndex1]
let imgSource2 = dice[imgIndex2]

document.querySelector(".img1").setAttribute("src", imgSource1)
document.querySelector(".img2").setAttribute("src", imgSource2)


if (imgIndex1 > imgIndex2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!"
}
else if (imgIndex2 > imgIndex1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!"
}
else {
  document.querySelector("h1").innerHTML = "Draw!"
}