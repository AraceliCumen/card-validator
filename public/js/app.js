// 'use strict';

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

$expiryDate.on('keyup', function () {
  isDateValid($expiryDate);
});