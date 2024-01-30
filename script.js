let submit = document.querySelector(".submit");
submit.addEventListener("click", (evt) => calAge(evt));


const calAge = (evt) => {
    console.log('hello')
    let day = document.querySelector(".day input");
    let mon = document.querySelector(".month input");
    let year = document.querySelector(".year input");
    
    let dayError = document.querySelector(".day .error");
    let monError = document.querySelector(".month .error");
    let yearError = document.querySelector(".year .error");
    let flag = false;
    if (day.value ===""){
        dayError.innerText = "This field is required";
        day.style.borderColor = "hsl(0, 100%, 67%)";
        dayError.parentElement.style.color = "hsl(0, 100%, 67%)";
        flag = true;
    }
    if (mon.value ===""){
        monError.innerText = "This field is required";
        mon.style.borderColor = "hsl(0, 100%, 67%)";
        monError.parentElement.style.color = "hsl(0, 100%, 67%)";
        flag = true;
    }
    if (year.value ===""){
        yearError.innerText = "This field is required";
        year.style.borderColor = "hsl(0, 100%, 67%)";
        yearError.parentElement.style.color = "hsl(0, 100%, 67%)";
        flag = true;
    }
    
    let dobDay = Number(day.value);
    let dobMon = Number(mon.value);
    let dobYear = Number(year.value);

    let currDate = new Date();
    let currDay = currDate.getDay();
    let currMon = currDate.getMonth();
    let currYear = currDate.getFullYear();
    console.log(dobDay);
    if(dobDay<0 || dobDay > 31 || isNaN( dobDay)){
        dayError.innerText = "Must be valid day";
        day.style.borderColor = "hsl(0, 100%, 67%)";
        dayError.parentElement.style.color = "hsl(0, 100%, 67%)";
        flag = true;
    }
    if(dobMon<0 || dobMon > 12 || isNaN(dobMon)){
        monError.innerText = "Must be valid month";
        mon.style.borderColor = "hsl(0, 100%, 67%)";
        monError.parentElement.style.color = "hsl(0, 100%, 67%)";
        flag = true;
    }
    if(dobYear<0 || dobYear > currYear || isNaN(dobYear)){

        yearError.innerText = "Must be in the past";
        year.style.borderColor = "hsl(0, 100%, 67%)";
        yearError.parentElement.style.color = "hsl(0, 100%, 67%)";
        flag = true;
    }
    if(flag){
        return;
    } 
    document.querySelectorAll(".error").forEach((error) => {
        error.innerText = "";
        
    })
    let ageYears = currYear - dobYear;
    let ageMon, ageDay;
    if(currMon >= dobMon){
        ageMon = currMon - dobMon;
    }
    else {
        ageYears--;
        ageMon = 12 + currMon - dobMon;
    }
    
    if(currDay >= dobDay){
        ageDay = currDay - dobDay;
    } else{
        ageMon--;
        ageDay = 31 + currDay - dobDay;
    }
    
    if(ageMon < 0){
        ageMon = 11;
        ageYears--;
    }
    
    const age = {
        days: ageDay,
        months: ageMon,
        years: ageYears
    }

    document.querySelector(".years span").innerText = age.years;
    document.querySelector(".months span").innerText = age.months;
    document.querySelector(".days span").innerText = age.days;
    
}
