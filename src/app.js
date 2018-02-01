let $formCardValidate = $('#form-dard-validate'); 
let  $typeOfCard = $('#type-card');

let $cardNumber = $('#cn');
let $expiryDate = $('#exp');
let $cvv = $('#cvv');
let $name = $('#name');
let $buttonPay = $('#btn-pay');

$cardNumber.on('input', ()=>{
  validateNumberCard($cardNumber, $typeOfCard);
  activeButton($buttonPay);
});

$name.on('input', () => {
  isNameValid($name);
  activeButton($buttonPay);
});

$cvv.on('input', () => {
  validateCvv($cvv);
  activeButton($buttonPay);
});

$expiryDate.on('input', () =>{
  isDateValid($expiryDate);
  activeButton($buttonPay);
});


