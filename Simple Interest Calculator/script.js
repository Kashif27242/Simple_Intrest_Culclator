let calculateBtn = document.getElementById("calculate-btn");
let result = document.getElementById("result");

const mySlider = document.getElementById("my-slider");
const sliderValue = document.getElementById("slider-value");

function slider(){
    valPercent = parseFloat((mySlider.value / mySlider.max)*1000);
    // mySlider.style.background = `linear-gradient(to right, #3264fe ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  
    
    sliderValue.textContent = parseFloat(mySlider.value);

    
}
slider();
// comments are main jhoot bola ja sakta hai par code main nheg

function uff(){
    let q = Number(document.getElementById("principal").value);
    if(q>0){
        culculate();
    }
    else{
        alert("enter a postive a number")}
}
function culculate(){

    let p = Number(document.getElementById("principal").value);


    
// let r = Number(document.getElementById("rate").value);
let r = sliderValue.textContent = mySlider.value;
let t = Number(document.getElementById("time").value);
 



  let simpleInterest =(p * r * t) / 100;
   
  let amount = p + simpleInterest;

   

  result.innerHTML = `<div>Principal Amount: <span>$${p.toFixed(2)}</span></div>
  <div>Total Interest: <span>$${simpleInterest.toFixed(2)}</span></div>
  <div>Total Amount: <span>$${amount.toFixed(2)}</span></div>`;

 }
 
   


// let calculate = () => 

;
// calculateBtn.addEventListener("click", calculate);
// window.addEventListener("load", calculate);



  