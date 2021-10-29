const billInput = document.getElementById('billInput');
const pplInput = document.getElementById("pplInput");
const tipValues = document.getElementsByClassName('tipValue')
const custom = document.getElementById('custom');
const tipAmt = document.getElementById("tipAmt");
const ttlAmt = document.getElementById("ttlAmt");
const warningLabel = document.getElementById('warningLabel')
const resetBttn = document.querySelector('.resetBttn')


let billAmt = 0;
let pplTotal = 1;
let percent = 0;

let tip = (billAmt * percent) / pplTotal;
let ttl = billAmt + tip;


// Sets 'billAmt' to the total bill
billInput.addEventListener('change', (e) => {
    e.preventDefault()
    billAmt = parseFloat(e.target.value) || 0
     displayAmts()

})

// Sets 'pplTotal' to total number of people
pplInput.addEventListener("change", (e) => {
    e.preventDefault()
    pplTotal = parseFloat(e.target.value) || 1
     displayAmts()

})

// custom button click handle event && Sets 'percent' to custom value
const handleCustom = () => {
  custom.addEventListener("change", (e) => {
    e.preventDefault();
    let convertToDecimel = parseFloat(e.target.value) / 100;
      percent = convertToDecimel
      displayAmts();
  });
}

// Sets 'percent' to button's percentage
for (let i = 0; i < tipValues.length; i++){
    tipValues[i].addEventListener('click', (e) => {
        e.preventDefault()
        // custom button click event
        if (e.target.id == 'custom') {
            handleCustom()
            displayAmts();
        } else {
            percent = parseFloat(e.target.value) || 1
            displayAmts();
        }
    })
}

// Display Tip Ammount Per Person
const displayAmts = () => {
    let tip = ((billAmt * percent) / pplTotal) ;
    let ttl = ((billAmt + tip) / pplTotal) ;

    tipAmt.innerText = `$${tip.toFixed(2)}`
    ttlAmt.innerText = `$${ttl.toFixed(2)}`
}

//Show warning on PPl Input
pplInput.addEventListener('focus', () => {
    warningLabel.innerText = "Can't be zero";
})

// hide warning on PPL Input
pplInput.addEventListener("blur", () => {
  warningLabel.innerText = "";
});

//Handle reset button
resetBttn.addEventListener('click', () => {
    billInput.value = ''
    pplInput.value = ''
    custom.value= ''
    percent = 0
    billAmt = 0
    pplTotal = 1
    tipAmt.innerText = `$0.00`;
    ttlAmt.innerText = `$0.00`;

})
