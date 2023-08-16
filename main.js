// import JSConfetti from 'js-confetti'

// const jsConfetti = new JSConfetti()




const canvas = document.getElementById('conv')

const jsConfetti = new JSConfetti({ canvas })



// document.getElementById().addEventListener("click",jsConfetti.addConfetti({
//   emojis: ['🦄'],
//   emojiSize: 100,
//   confettiNumber: 30,
// }))

function yes() {
  jsConfetti.addConfetti({
    // emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
    emojis: ['❤', '💖', '💋', '💖', '😘', '🌸'],
    confettiRadius: 6,
    confettiNumber: 150,
 })
}


function no() {
  jsConfetti.addConfetti({
    emojis: ['🙄', '🤨', '😑', '🙄', '😒', '🙃'],
    confettiRadius: 6,
    confettiNumber: 150,
 })
}
