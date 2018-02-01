$formCardValidate = $('#form-dard-validate'); 
$typeOfCard = $('#type-card');

$cardNumber = $('#cn');
$expiryDate = $('#exp');
$cvv = $('#cvv');
$name = $('#name');
$buttonPay = $('#btn-pay');

$cardNumber.on('keyup', ()=>{
  validateNumberCard($cardNumber, $typeOfCard);
  activeButton($buttonPay);
});

$name.on('keyup', () => {
  isNameValid($name);
  activeButton($buttonPay);
});

$cvv.on('keyup', () => {
  validateCvv($cvv);
  activeButton($buttonPay);
});

$expiryDate.on('keyup', () =>{
  isDateValid($expiryDate);
  activeButton($buttonPay);
});


