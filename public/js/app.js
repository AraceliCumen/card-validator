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
  activeButton($buttonPay);
});

$name.on('keyup', function () {
  isNameValid($name);
  activeButton($buttonPay);
});

$cvv.on('keyup', function () {
  validateCvv($cvv);
  activeButton($buttonPay);
});

$expiryDate.on('keyup', function () {
  isDateValid($expiryDate);
  activeButton($buttonPay);
});