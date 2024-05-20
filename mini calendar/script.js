const month_ = document.querySelector('.month');
const dayName_ = document.querySelector('.day-name');
const date_ = document.querySelector('.date');
const year_ = document.querySelector('.year');

let d = new Date();
month_.innerHTML = d.toLocaleDateString('en', {month: "long" });
dayName_.innerHTML = d.toLocaleDateString('en', {weekday: "long" });
date_.innerHTML = d.getDate();
year_.innerHTML = d.getFullYear();