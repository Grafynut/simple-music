//by subhajit maity-->

const box = document.querySelectorAll('.box');

box.forEach((item) => {
    item.addEventListener('click', respondClicked);
})

//onclick
function respondClicked(match) {
    box.forEach((item) => {

        if (item.innerHTML === match) {
            item.classList.add('active');

            setTimeout(function () {
                item.classList.remove('active');
            }, 100)
        } else {
            item.classList.remove('active');
        }

    });
    audiofunc(this.innerHTML);

}

//sound function
var audio;
function audiofunc(latter) {
    switch (latter) {
        case 'w':
            audio = new Audio("assets/sounds/tom-1.mp3");
            audio.play();
            break;

        case 'a':
            audio = new Audio("assets/sounds/tom-2.mp3");
            audio.play();
            break;

        case 's':
            audio = new Audio("assets/sounds/tom-3.mp3");
            audio.play();
            break;

        case 'k':
            audio = new Audio("assets/sounds/tom-4.mp3");
            audio.play();
            break;

        case 'l':
            audio = new Audio("assets/sounds/snare.mp3");
            audio.play();
            break;

        case 'j':
            audio = new Audio("assets/sounds/crash.mp3");
            audio.play();
            break;

        default:
    }
}

//keyboard keypress
document.onkeypress = function (e) {
    let V = e.key;
    audiofunc(V);
    respondClicked(V);
}