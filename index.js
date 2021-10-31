const billInput = document.getElementById('bill');
const tipSelect = document.querySelectorAll('.tip');
const tipSelectCustom = document.getElementById('tip-input');
const peopleInput = document.getElementById('people');
const tipTotal = document.querySelector('#tip-total');
const billTotal = document.querySelector('#bill-total');
const resetBtn = document.getElementById('reset-btn')

let billInputValue, tipSelectValue, peopleInputValue;
let tipValue, billValue;

// billInput.addEventListener('input', function(){
//   billInputValue = +billInput.value
//   billValue = billInputValue;
//   console.log(billInputValue)
// })

for(let i=0; i<tipSelect.length; i++){
  tipSelect[i].addEventListener('click', function(){

    tipSelectValue = +tipSelect[i].value;
    tipSelect[i].style.backgroundColor = 'green'
  })
}
tipSelectCustom.addEventListener('input', function(){
  tipSelectValue = +tipSelectCustom.value
})


// tipSelectCustom.addEventListener('input', function(){
//   console.log(tipSelectCustom.value);
// })

peopleInput.addEventListener('input', function(){
  billInputValue = +billInput.value

  peopleInputValue = +peopleInput.value
  tipValue = (billInputValue * (tipSelectValue/100)) / peopleInputValue
  billValue = (billInputValue + tipValue) / peopleInputValue

  console.log(billInputValue, tipSelectValue, peopleInputValue)

  tipTotal.innerHTML = (`$ ${tipValue}`)
  billTotal.innerHTML = (`$ ${billValue}`)
})

resetBtn.addEventListener('click', function(e){
  billInput.innerText = 'wow'
  e.preventDefault()
})








