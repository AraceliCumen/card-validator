$formCardValidate = $('#form-dard-validate'); 
$typeOfCard = $('#type-card');

$cardNumber = $('#cn');
$expiryDate = $('#exp');
$cvv = $('#cvv');
$name = $('#name');
$buttonPay = $('#btn-pay');

$cardNumber.on('keyup', ()=>{
  validateNumberCard($cardNumber, $typeOfCard);
});

$name.on('keyup', ()=> {
  isNameValid($name);
});

$cvv.on('keyup', () => {
  validateCvv($cvv);
});

// function areAllValidationsPassing(){
//   if (validateNumberCard($cardNumber, $typeOfCard) && isNameValid($name) && validateCvv($cvv)) {
//     console.log('todas estan validas');
//     $buttonPay.removeAttr('disabled'); 
//   }
// }

// activeButton($buttonPay);

