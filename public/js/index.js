'use strict';

// VARIABLES PARA JALAR IMAGENES DE TARJETAS
// Imágen tarjeta Visa
var visa = '../public/assets/img/visa.png';
// Imágen tarjeta Mastercard
var mastercard = '../public/assets/img/mastercad.png';
// Imágen Tarjeta American expres
var americanexpres = '../public/assets/img/aex.png';
// EXPRESIONES REGURALES PARA VALIDAR LOS NUMEROS DE LAS TARJETAS DE CREDITO
// Tarjeta  visa
var numberVisa = /^4\d{12}(\d{3})?$/;
// Tarjeta Mastercad
var numberMastercard = /5[1-5][0-9]{14}$/;
// Tarjeta American Express
var numberAmericanExpress = /^3[47][0-9]{13}$/;
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

$buttonPay = $('#btn-pay');

var activeButton = function activeButton(button) {
  if (validateNumber === true &&
  // validateDate === true &&
  validateCVV === true && validateName === true) button.removeAttr('disabled');
  // else {
  //   button.attr("disabled");
  // }
};

var validateNumberCard = function validateNumberCard(numb, typecard) {
  numb = $('#cn').val();
  // if (numb && number.test(numb) && numb.length === 16) {
  if (number.test(numb) && numb.length === 16) {
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
      $('#cn').addClass('success');
      $('#cn').removeClass('error');
      if (numb.match(numberVisa)) {
        typecard.attr('src', visa);
      }
      if (numb.match(numberMastercard)) {
        typecard.attr('src', mastercard);
      }
      if (numb.match(numberMastercard)) {
        typecard.attr('src', americanexpres);
      }
      // else {
      //   validateNumber = false;
      //   console.log('no se acepta esa tarjeta');
      //   typecard.attr('src', '');
      // }
      return true;
      activeButton($buttonPay);
    } else {
      validateNumber = false;
      typecard.attr('src', '');
      $('#cn').addClass('error');
      $('#cn').removeClass('success');
    }
  } else {
    validateNumber = false;
    typecard.attr('src', '');
    $('#cn').addClass('error');
    $('#cn').removeClass('success');
  }
  // areAllValidationsPassing();
  activeButton();
};

// VALIDAR NOMBRE
// name --> sera el valor del input de nombre
var isNameValid = function isNameValid(name) {
  var PATERNNAME = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
  name = $('#name').val();
  if (PATERNNAME.test(name)) {
    validateName = true;
    $('#name').addClass('success');
    $('#name').removeClass('error');
    return true;
    activeButton($buttonPay);
  } else {
    validateName = false;
    $('#name').addClass('error');
    $('#name').removeClass('success');
  }
  // areAllValidationsPassing();
  activeButton();
};

var validateCvv = function validateCvv(cvv) {
  cvv = $('#cvv').val();
  if (number.test(cvv) && cvv.length === 3) {
    validateCVV = true;
    $('#cvv').addClass('success');
    $('#cvv').removeClass('error');
    return true;
    activeButton($buttonPay);
  } else {
    validateCVV = false;
    $('#cvv').addClass('error');
    $('#cvv').removeClass('success');
  }
  // areAllValidationsPassing();
  activeButton();
};

// const areAllValidationsPassing = () => {
//   if (validateNumberCard(numb, typecard) && isNameValid(name) && validateCvv(cvv)) {
//     // $buttonPay.attr('disabled', true);
//     $("#btn-pay").removeAttr("disabled"); 
//   }
// };

// const activeButton = (btn) => {
//   btn.attr('disabled', false);
// };

// VALIDAR FECHA
// month --> sera el mes del input de la fecha ingresa, separar con split y separar mes de anio
// year --> la otra parte del input
var isDateValid = function isDateValid(date) {
  date = $('#exp').val();
  month = parseInt(date.slice(0, 2));
  year = parseInt(date.slice(2, 5));
  if (regMonth.test(month) && regYear.test(year)) {
    console.log('validate date');
    validateDate = true;
    $('#exp').addClass('success');
    $('#exp').removeClass('error');
    return true;
  } else {
    validateDate = false;
    console.log("unvalidate date");
    $('#exp').addClass('error');
    $('#exp').removeClass('success');
  }
};

// ACTIVAR BUTTON
// button --> sera el el boton del form

// activeButton($buttonPay);

// const activeButton = button => {
//   if (
//     validateNumber === true &&
//     validateDate === true &&
//     validateCVV === true &&
//     validateName === true
//   )
//     button.removeAttr('disabled');
//   else button.attr('disabled', 'disabled');
// };