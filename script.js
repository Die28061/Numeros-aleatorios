function getRandom() {
    let start = document.getElementsByClassName('start')[0].value;
    let end = document.getElementsByClassName('end')[0].value;
    document.getElementsByClassName('number')[0].innerHTML = 'El número elegido es: ' + getRandomBetween(parseInt(start), parseInt(end));
}

// function getRandom() {
//     let start = document.getElementById('start').value;
//     let end = document.getElementById('end').value;
//     document.getElementById('number').innerHTML = 'The random number is: ' + getRandomBetween(parseInt(start), parseInt(end));
// }

function getRandomBetween(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}
