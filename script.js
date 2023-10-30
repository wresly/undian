const startBtn = document.getElementById("start")
const inputBtn = document.getElementById("input")
const input2Btn = document.getElementById("input2")
const listSekolahFrm = document.getElementById("inputan-sekolah")
const fadeInSound = new Audio('fadeInSound.mp3');
var peserta = ["sekolah1", "sekolah2", "sekolah3", "sekolah4"]
// for (let i = 1; i <= 100; i++) {
//     peserta.push(`sekolah${i}`);
//   }

var defaultPesertaLength = peserta.length
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

startBtn.addEventListener("click", async function () {

    for (let index = 0; index < defaultPesertaLength; index += 2) {
        let rand1 = getRandom(0, peserta.length - 1)
        let rand2 = getRandom(0, peserta.length - 1)
        while (rand2 == rand1) {
            rand2 = getRandom(0, peserta.length - 1)
        }
        console.log(`peserta 1 : ${peserta[rand1]} | peserta 2 : ${peserta[rand2]}`)
        addSekolah(peserta[rand1], peserta[rand2])
        fadeInSound.play()
        peserta.splice(rand1, 1)
        peserta.splice(rand2 > rand1 ? rand2 - 1 : rand2, 1);
        await delay(2500);

    }
})

function addSekolah(sekolah1, sekolah2) {
    // parent element
    const parentElement = document.getElementById("result");

    // span
    const firstSpan = document.createElement("span");
    firstSpan.textContent = sekolah1;

    // hr
    const hrElement = document.createElement("hr");

    // span 2
    const secondSpan = document.createElement("span");
    secondSpan.textContent = sekolah2;

    // div for wrapper
    const resultChildDiv = document.createElement("div");
    resultChildDiv.classList.add("result-child");
    resultChildDiv.classList.add("fade-in");

    // Append the elements to the result-child div
    resultChildDiv.appendChild(firstSpan);
    resultChildDiv.appendChild(hrElement);
    resultChildDiv.appendChild(secondSpan);

    // Append the result-child div to the parent element
    parentElement.appendChild(resultChildDiv);
}

inputBtn.addEventListener("click", function () {
    listSekolahFrm.classList.toggle("hide")
})

input2Btn.addEventListener("click", function () {
    // replace with new array data
    let inputString = document.getElementById("listSekolah").value
    peserta = inputString.split(',').map(item => item.trim());
    defaultPesertaLength = peserta.length

    // remove old result
    const elementsToRemove = document.querySelectorAll('.result-child');
    // Start from the second element (index 1) and remove the rest
    for (let i = 1; i < elementsToRemove.length; i++) {
        elementsToRemove[i].remove();
    }

    // hide form
    listSekolahFrm.classList.toggle("hide")
})

function getRandom(min, max) {
    const floatRandom = Math.random()

    const difference = max - min

    // random between 0 and the difference
    const random = Math.round(difference * floatRandom)

    const randomWithinRange = random + min

    return randomWithinRange
}
