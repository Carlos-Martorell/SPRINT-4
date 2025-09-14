
const arrBlob = [
    "magicpattern-1",
    "magicpattern-2",
    "magicpattern-3",
    "magicpattern-4",
    "magicpattern-5",
    "magicpattern-6"
]
const randomBgElement = document.getElementById('random-bg');
let randomBlob = 0;

function getRandomBlob() {
    const randomIndex = Math.floor(Math.random() * arrBlob.length);
    return randomIndex;
}

export function setRandomBlobBackground() {
    if (randomBgElement) {
        if (randomBgElement.classList.contains(arrBlob[randomBlob])){
            randomBgElement.classList.remove(arrBlob[randomBlob]);
        }
        randomBlob = getRandomBlob();
        {
        randomBgElement.classList.add(arrBlob[randomBlob]);
    }
}
}


