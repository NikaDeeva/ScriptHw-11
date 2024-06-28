"use strict"
// 1
const bankAccount = {
    ownerName: 'John',
    accountNum: 99999999,
    balance: 3000,
    deposit(amountD) {
        this.balance += amountD;
        this.updateBalance();
        alert('Your balance: ' + this.balance);
    },
    withdraw(amountW) {
        if (amountW > this.balance) {
            alert('There`s not so much money');
        } else {
            this.balance -= amountW;
            this.updateBalance();
            alert('Your balance: ' + this.balance);
        }
    },
    updateBalance() {
        document.getElementById('balance').textContent = this.balance;
    }
};

function updateBalance() {
    const added = parseFloat(document.getElementById('deposit').value);
    const rested = parseFloat(document.getElementById('withdraw').value);
    
    if (!isNaN(added) && added > 0) {
        bankAccount.deposit(added);
    }
    
    if (!isNaN(rested) && rested > 0) {
        bankAccount.withdraw(rested);
    }
    
    document.getElementById('deposit').value = '';
    document.getElementById('withdraw').value = '';
}
// 2
function knowWeather(){
const weather = {
    temperature: document.getElementById('degrees').value,
    humidity: '55%',
    windSpeed: '20 km/h',
};
if (weather.temperature < 0){
    console.log(false);
}
else{
    console.log(true);
};
};
// 3

function checkLogin(){
    const user = {
        name: 'Victoria',
        email:'vic@gmail.com',
        password: 'myPassword',
    }
const mailValue = document.getElementById('mail').value;
const passValue = document.getElementById('pass').value;
if (mailValue === user.email && passValue === user.password){
    console.log(true);
}
else{
    console.log(false);
}
};
// 4
const movie = {
    title: 'JavaScript',
    director: 'Peppa Pig',
    year: 3048,
    rating: null,
    correcting(){
       return this.rating > 8;
    }
};
document.getElementById('title').innerText = 'Title:' + movie.title;
document.getElementById('director').innerText = 'Director: ' + movie.director;
document.getElementById('year').innerText = 'Year:' + movie.year;

function movieUpdate(){
movie.rating = parseFloat(document.getElementById('movieRating').value);
document.getElementById('rating').innerText = 'Rating:' + movie.rating;

    if (movie.correcting()=== true){
        document.getElementById('title').classList.add('high-rating');
    } else{
        document.getElementById('title').classList.remove('high-rating'); 
    }
};