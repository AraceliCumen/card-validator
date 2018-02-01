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

$name.on('keyup', () => {
  isNameValid($name);
});

$cvv.on('keyup', () => {
  validateCvv($cvv);
});

$expiryDate.on('keyup', () =>{
  isDateValid($expiryDate);

});


