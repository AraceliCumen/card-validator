'use strict';

$(document).ready(function () {
  // Variables para las imágenes de los tipos de tarjetas
  // Imágen tarjeta Visa
  var visa = 'assets/img/visa.png';
  // Imágen tarjeta Mastercard
  var mastercard = 'assets/img/mastercad.png';
  // Imágen Tarjeta American expres
  var number = /^([0-9])*$/;

  $formCardValidate = $('#form-dard-validate');
  $typeOfCard = $('#type-card');

  $cardNumber = $('#cn');
  $expiryDate = $('#exp');
  $cvv = $('#cvv');
  $name = $('#name');
  $buttonPay = $('#btn-pay');

  var validateNumber = false;

  var validateNumberCard = function validateNumberCard() {
    var numb = $cardNumber.val();
    if (numb && number.test(numb) && numb.length === 16) {
      var total = 0;
      var arrNumberOfCard = numb.split('').reverse();

      arrNumberOfCard.forEach(function (element, i) {
        if (i % 2 !== 0) {
          var itemSelect = parseInt(arrNumberOfCard[i]) * 2;
          if (itemSelect >= 10) {
            var digitInitial = parseInt(itemSelect / 10);
            var digitFinal = itemSelect % 10;
            var itemFinal = digitInitial + digitFinal;
            arrNumberOfCard[i] = itemFinal;
          } else {
            var otherElement = parseInt(arrNumberOfCard[i]) * 2;
            arrNumberOfCard[i] = otherElement;
          }
        }
      });

      arrNumberOfCard.forEach(function (element, j) {
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

  var isNameValid = function isNameValid() {
    var PATERNNAME = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
    return PATERNNAME.test($name.val());
  };

  var areAllValidationsPassing = function areAllValidationsPassing() {
    return isNameValid();
  };

  var activeButton = function activeButton() {
    $buttonPay.attr('disabled', false);
  };
});