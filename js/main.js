const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const maleNames = {
    "Sunday": "Kwasi",
    "Monday": "Kwadwo",
    "Tuesday": "Kwabena",
    "Wednesday": "Kwaku",
    "Thursday": "Yaw",
    "Friday": "Kofi",
    "Saturday": "Kwame"
}

const femaleNames = {
    "Sunday": "Akosua",
    "Monday": "Adwoa",
    "Tuesday": "Abenaa",
    "Wednesday": "Akua",
    "Thursday": "Yaa",
    "Friday": "Afua",
    "Saturday": "Ama"
}

var form = document.getElementById("bdateform")

form.addEventListener('submit', function(event){
    event.preventDefault()
    let date = this.bdate.value
    let gender = this.gender.value

    var CC = Number(date.split("-")[0].substring(0,2))
    var YY = Number(date.split("-")[0].substring(2,4))
    var MM = Number(date.split("-")[1])
    var DD = Number(date.split("-")[2])

    var day1 = ( ( Math.trunc((CC/4)) -(2*CC)-1) + ((5*Math.trunc(YY/4)) ) + ((26*Math.trunc((MM+1)/10))) + DD ) % 7
    console.log(day1)
})