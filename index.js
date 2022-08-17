let menuHour = document.querySelector('.date__hour');
let menuMinute = document.querySelector('.date__minute');
let menuSecond = document.querySelector('.date__second');
let topScroll = document.querySelector('.top__scroll');

let getDate = () => {
    (menuHour.innerText < 9) ? menuHour.innerHTML = '0' + new Date().getHours() : menuHour.innerHTML = new Date().getHours();

    (menuMinute.innerText < 9) ? menuMinute.innerHTML = '0' + new Date().getMinutes() : menuMinute.innerHTML = new Date().getMinutes();
        
    (menuSecond.innerText < 9) ? menuSecond.innerHTML = '0' + new Date().getSeconds() : menuSecond.innerHTML = new Date().getSeconds();
}
setInterval(getDate, 1000);

window.addEventListener('contextmenu', e => e.preventDefault())

window.addEventListener('scroll', () => {
    topScroll.classList.toggle('scroll', scrollY > 400);
})

window.document.onkeydown = function (e) {
    if (e.ctrlKey &&
        (e.keyCode === 67 ||
            e.keyCode === 86 ||
            e.keyCode === 85 ||
            e.keyCode === 117)) {
        return false;
    } else {
        return true;
    }
};