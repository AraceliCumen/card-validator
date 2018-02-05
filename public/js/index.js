'use strict';
cl = console.log();

// VARIABLES PARA JALAR IMAGENES DE TARJETAS
// Imágen tarjeta Visa
var visa = '../public/assets/img/visa.png';
// Imágen tarjeta Mastercard
var mastercard = '../public/assets/img/mastercard.png';
// Imágen Tarjeta American expres
var americanexpres = '../public/assets/img/aex.png';

// EXPRESIONES REGURALES PARA VALIDAR LOS NUMEROS DE LAS TARJETAS DE CREDITO
// Tarjeta  visa
var numberVisa = /^4\d{12}(\d{3})?$/;
// Tarjeta Mastercad
var numberMastercard = /^5[1-5][0-9]{5,}|222[1-9][0-9]{3,}|22[3-9][0-9]{4,}|2[3-6][0-9]{5,}|27[01][0-9]{4,}|2720[0-9]{3,}$/;
// Tarjeta American Express
var numberAmericanExpress = /^3[47][0-9]{5,}$/;

// EXPRESION REGULAR PARA VALIDAR MES
var regMonth = /^01|02|03|04|05|06|07|08|09|10|11|12$/;

// EXPRESION REGULAR PARA VALIDAR ANIO
var regYear = /^18|19|20|21|22|23|24|25|26|27|28|29|30|31$/;

// EXPRESION REGULAR PARA VALIDAR CVV
var regCVV = /^[0-9]{3,3}$/;

// EXPRESION REGULAR PARA VALIDAR NUMERO
var number = /^([0-9])*$/;

// EXPRESION REGULAR PARA VALIDAR NOMBRE
var PATERNNAME = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;

//  VARIABLES PARA LA VALIDACION
var validateNumber = false;
var validateDate = false;
var validateCVV = false;
var validateName = false;

var validateNumberCard = function validateNumberCard(numb, typecard) {
  numb = $('#cn').val();
  // if (numb && number.test(numb) && numb.length === 16) {
  if (number.test(numb) && numb.length >= 15 || numb.length <= 16) {
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
      $('#cn').addClass('valid');
      $('#cn').removeClass('invalid');
      if (numb.match(numberVisa)) {
        typecard.attr('src', visa);
      }
      if (numb.match(numberMastercard)) {
        typecard.attr('src', mastercard);
      }
      if (numb.match(numberAmericanExpress)) {
        typecard.attr('src', americanexpres);
      }
      return true;
    } else {
      validateNumber = false;
      typecard.attr('src', '');
      $('#cn').addClass('valid');
      $('#cn').removeClass('invalid');
    }
  } else {
    validateNumber = false;
    typecard.attr('src', '');
    $('#cn').addClass('valid');
    $('#cn').removeClass('invalid');
  }
};

// VALIDAR NOMBRE
// name --> sera el valor del input de nombre
var isNameValid = function isNameValid(name) {
  var PATERNNAME = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
  name = $('#name').val();
  if (PATERNNAME.test(name) && name.length > 6) {
    validateName = true;
    $('#name').addClass('valid');
    $('#name').removeClass('invalid');
    return true;
    activeButton($buttonPay);
  } else {
    validateName = false;
    $('#name').addClass('invalid');
    $('#name').removeClass('valid');
  }
};

var validateCvv = function validateCvv(cvv) {
  cvv = $('#cvv').val();
  if (number.test(cvv) && cvv.length === 3) {
    validateCVV = true;
    $('#cvv').addClass('valid');
    $('#cvv').removeClass('invalid');
    return true;
    activeButton($buttonPay);
  } else {
    validateCVV = false;
    $('#cvv').addClass('invalid');
    $('#cvv').removeClass('valid');
  }
};

// VALIDAR FECHA
// month --> sera el mes del input de la fecha ingresa, separar con split y separar mes de anio
// year --> la otra parte del input
var isDateValid = function isDateValid(date) {
  date = $('#exp').val();
  var month = parseInt(date.slice(0, 2));
  var year = parseInt(date.slice(2, 5));
  if (regMonth.test(month) && regYear.test(year)) {
    console.log('validate date');
    validateDate = true;
    $('#exp').addClass('valid');
    $('#exp').removeClass('invalid');
    return true;
  } else {
    validateDate = false;
    console.log('unvalidate date');
    $('#exp').addClass('invalid');
    $('#exp').removeClass('valid');
  }
};

// ACTIVAR BUTTON
// button --> sera el el boton del form

var activeButton = function activeButton(button) {
  if (validateNumber === true && validateDate === true && validateCVV === true && validateName === true) {
    button.removeAttr('disabled');
  }
};