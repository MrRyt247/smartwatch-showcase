const getHeight = () => {
    const sectionLeft = document.querySelector(".left");
    const sectionRight = document.querySelector(".right");
    sectionRight.style.setProperty('height', `${sectionLeft.clientHeight}px`);
};

window.onload = getHeight;
window.onresize = getHeight;

const watch = document.getElementById("watch");
const hour = document.getElementById("hrs");
const minute = document.getElementById("mins");
const second = document.getElementById("secs");
const colorBoxes = document.querySelectorAll(".color");
const buttons = document.querySelectorAll(".buttons button");
const time = document.querySelector(".time");
const heartRate = document.querySelector(".heart-rate");
const heartVal = document.querySelector(".heart-rate span");

setInterval(() => {
    var date = new Date();
    var hrs = date.getHours();
    var mins = date.getMinutes();
    var secs = date.getSeconds();
    if(hrs < 10) {
        hour.innerText = "0" + hrs;
    } else{
        hour.innerText = hrs;
    }
    if(mins < 10) {
        minute.innerText = "0" + mins;
    } else{
        minute.innerText = mins;
    }
    if(secs < 10) {
        second.innerText = "0" + secs;
    } else{
        second.innerText = secs;
    }
}, 1000);

var arr = [76, 77, 78, 79, 80];

setInterval(() => {
    let i = Math.floor(Math.random() * 4);
    heartVal.innerText = arr[i];
}, 3000)

buttons.forEach(button => {
    button.addEventListener('click', () => {
        switch (button.textContent) {
            case "Time":
                heartRate.style.setProperty('display', 'none');                time.style.setProperty('display', 'flex');
                time.style.setProperty('display', 'flex');
                break;
            case "Heart Rate":
                time.style.setProperty('display', 'none');
                heartRate.style.setProperty('display', 'flex');
                break;
            default:
                break;
        }
    })
})

function setAttributes(el, attr) {
    for(var key in attr) {
        el.setAttribute(key, attr[key]);
    }
};

colorBoxes.forEach(box => {
    box.addEventListener('click', () => {
        switch (box.getAttribute('class')) {
            case 'color black':
                setAttributes(watch, {'src': 'assets/black.png', 'alt': 'black-watch'});
                break;       
            case 'color red':
                setAttributes(watch, {'src': 'assets/red.png', 'alt': 'red-watch'});
                break;       
            case 'color blue':
                setAttributes(watch, {'src': 'assets/blue.png', 'alt': 'blue-watch'});
                break;       
            case 'color purple':
                setAttributes(watch, {'src': 'assets/purple.png', 'alt': 'purple-watch'});
                break;       
            case 'color pink':
                    setAttributes(watch, {'src': 'assets/pink.png', 'alt': 'pink-watch'});
                break;       
            default:
                break;
        }
    });
});
