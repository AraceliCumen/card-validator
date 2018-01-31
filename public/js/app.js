'use strict';

$formCardValidate = $('#form-dard-validate');
$typeOfCard = $('#type-card');

$cardNumber = $('#cn');
$expiryDate = $('#exp');
$cvv = $('#cvv');
$name = $('#name');
$buttonPay = $('#btn-pay');

$cardNumber.on('keyup', function () {
  validateNumberCard($cardNumber, $typeOfCard);
});

$name.on('keyup', function () {
  isNameValid($name);
});

$cvv.on('keyup', function () {
  validateCvv($cvv);
});

// function areAllValidationsPassing(){
//   if (validateNumberCard($cardNumber, $typeOfCard) && isNameValid($name) && validateCvv($cvv)) {
//     console.log('todas estan validas');
//     $buttonPay.removeAttr('disabled'); 
//   }
// }

// activeButton($buttonPay);