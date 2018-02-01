let $formCardValidate = $('#form-dard-validate'); 
let  $typeOfCard = $('#type-card');

let $cardNumber = $('#cn');
let $expiryDate = $('#exp');
let $cvv = $('#cvv');
let $name = $('#name');
let $buttonPay = $('#btn-pay');

$cardNumber.on('input', ()=>{
  validateNumberCard($cardNumber, $typeOfCard);
  funtionValidateNumberCardinData($cardNumber);
  activeButton($buttonPay);
});

$name.on('input', () => {
  isNameValid($name);
  funtionValidateNumberCardinData($name);
  activeButton($buttonPay);
});

$cvv.on('input', () => {
  validateCvv($cvv);
  funtionValidateCvvinData($cvv);
  activeButton($buttonPay);
});

$expiryDate.on('input', () =>{
  isDateValid($expiryDate);
  funtionValidateExpinData($expiryDate);
  activeButton($buttonPay);
});


