let percentage = document.querySelector('.percentage');
let percent = document.querySelector('.percent');
let sec = document.querySelector('.sec');
let toggle = document.querySelector('.toggle');

navigator.getBattery().then(function(battery){
    percentage.style.width = battery.level*100 + '%';
    percent.innerText = battery.level*100 + '%';
})

toggle.onclick = function(){
    sec.classList.toggle('dark');
}