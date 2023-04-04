
let elH1 = document.querySelector(".heading")
let elH2 = document.querySelector(".heading2")
let elForm = document.querySelector("#form")
let elP=document.querySelector("p")
let elH3 = document.querySelector(".heading3")
let inp1 = document.querySelector(".inp1")
let inp2 = document.querySelector(".inp2")

// soat


setInterval(() => {
  let hour = new Date().getHours();
  let minut = new Date().getMinutes()
  let second = new Date().getSeconds()
  let milSecond = new Date().getMilliseconds()
  let day =new Date().getDay();
  let month =new Date().getMonth();
let year = new Date().getFullYear();  
  function getDate(value){
    return String(value).padStart(2,0)
  }
  
  elP.innerHTML =`${getDate(year)}-${getDate(month)}-${getDate(day)}`;
  
  elH1.innerHTML = `${ getDate(hour)} : ${ getDate(minut)} : ${ getDate(second)} : ${ getDate(milSecond)}`
},100);

// sekundomer

let funcInterval = setInterval(() => {
  
  let second2 = new Date().getSeconds()
  let milSecond2 = new Date().getMilliseconds()
  
  function getDate(value){
    return String(value).padStart(2,0)
  }
  
  elH2.innerHTML = `${ getDate(second2)} : ${ getDate(milSecond2)}`
},100);

elForm.addEventListener("submit", evt => {
  evt.preventDefault()
  let {minut,second} = evt.target.elements
  
  let minutValue = minut.value 
  let secondValue = second.value 
  
  inp1.value = null;
  inp2.value = null;
  
  let timerFunc = setInterval(() =>{
    if(minutValue > 0 && secondValue == 0)
    {
      secondValue = 59;
      minutValue --  
      elH3.innerHTML = `${minutValue} : ${secondValue}`
    }
    else if( minutValue == 0 && secondValue == 0){
      clearInterval(timerFunc)
    }
    else{
      secondValue --
      elH3.innerHTML = `${minutValue} : ${secondValue}`
    }
    
  },1000)
})


// let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
// let timerID = setInterval(updateTime, 1000);
// updateTime();
// function updateTime() {
//     var cd = new Date();
//     clock.time = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
//     clock.date = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth()+1, 2) + '-' + zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()];
// };

