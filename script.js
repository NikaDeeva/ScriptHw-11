"use strict"
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