$(document).ready(() => {
  // Variables para las imágenes de los tipos de tarjetas
  // Imágen tarjeta Visa
  const visa = 'assets/img/visa.png';
  // Imágen tarjeta Mastercard
  const mastercard = 'assets/img/mastercad.png';
  // Imágen Tarjeta American expres
  const number = /^([0-9])*$/;


  $formCardValidate = $('#form-dard-validate');
  $typeOfCard = $('#type-card');

  $cardNumber = $('#cn');
  $expiryDate = $('#exp');
  $cvv = $('#cvv');
  $name = $('#name');
  $buttonPay = $('#btn-pay');

  let validateNumber = false;

  let validateNumberCard = () => {
    let numb = $cardNumber.val();
    if (numb && number.test(numb) && numb.length === 16) {
      let total = 0;
      let arrNumberOfCard = numb.split('').reverse();

      arrNumberOfCard.forEach((element, i) => {
        if (i % 2 !== 0) {
          let itemSelect = parseInt(arrNumberOfCard[i]) * 2;
          if (itemSelect >= 10) {
            let digitInitial = parseInt(itemSelect / 10);
            let digitFinal = itemSelect % 10;
            let itemFinal = digitInitial + digitFinal;
            arrNumberOfCard[i] = itemFinal;
          } else {
            let otherElement = parseInt(arrNumberOfCard[i]) * 2;
            arrNumberOfCard[i] = otherElement;
          }
        }
      });

      arrNumberOfCard.forEach((element, j) => {
        total += parseInt(arrNumberOfCard[j]);
      });

      if (total > 0 && total % 10 === 0) {
        validateNumber = true;
        if (numb.match(/^4\d{3}-?\d{4}-?\d{4}-?\d{4}$/)) {
          $typeOfCard.attr('src', visa);
        }
        if (numb.match(/^5[1-5]\d{2}-?\d{4}-?\d{4}-?\d{4}$/)) {
          $typeOfCard.attr('src', mastercard);
        }
      } else {
        validateNumber = false;
        $typeOfCard.attr('src', '');
      }
    } else {
      validateNumber = false;
      $typeOfCard.attr('src', '');
    }
  };


  const isNameValid = () => {
    var PATERNNAME = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
    return PATERNNAME.test($name.val());
  };

  const areAllValidationsPassing = () => {
    return isNameValid();
  };

  const activeButton = () => {
    $buttonPay.attr('disabled', false);
  };
});
