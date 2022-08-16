let menuHour = document.querySelector('.date__hour');
let menuMinute = document.querySelector('.date__minute');
let menuSecond = document.querySelector('.date__second');

let getDate = () => {
    (menuHour.innerText < 9) ? menuHour.innerHTML = '0' + new Date().getHours() : menuHour.innerHTML = new Date().getHours();

    (menuMinute.innerText < 9) ? menuMinute.innerHTML = '0' + new Date().getMinutes() : menuMinute.innerHTML = new Date().getMinutes();
        
    (menuSecond.innerText < 9) ? menuSecond.innerHTML = '0' + new Date().getSeconds() : menuSecond.innerHTML = new Date().getSeconds();
}
setInterval(getDate, 1000);

