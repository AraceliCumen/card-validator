// VARIABLES PARA JALAR IMAGENES DE TARJETAS
// Imágen tarjeta Visa
const visa = '../public/assets/img/visa.png';
// Imágen tarjeta Mastercard
const mastercard = '../public/assets/img/mastercad.png';
// Imágen Tarjeta American expres
const americanexpres = '../public/assets//img/aex.png';
// EXPRESIONES REGURALES PARA VALIDAR LOS NUMEROS DE LAS TARJETAS DE CREDITO
// Tarjeta  visa
const numberVisa = /^4\d{12}(\d{3})?$/;
// Tarjeta Mastercad
const numberMastercard = /5[1-5][0-9]{14}$/;
// Tarjeta American Express
const numberAmericanExpress = /^3[47][0-9]{13}$/;
// EXPRESION REGULAR PARA VALIDAR MES
const regMonth = /^01|02|03|04|05|06|07|08|09|10|11|12$/;
// EXPRESION REGULAR PARA VALIDAR ANIO
const regYear = /^18|19|20|21|22|23|24|25|26|27|28|29|30|31$/;
// EXPRESION REGULAR PARA VALIDAR CVV
const regCVV = /^[0-9]{3,3}$/;

// EXPRESION REGULAR PARA VALIDAR NUMERO
const number = /^([0-9])*$/;

// EXPRESION REGULAR PARA VALIDAR NOMBRE
const PATERNNAME = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;

//  VARIABLES PARA LA VALIDACION
let validateNumber = false;
let validateDate = false;
let validateCVV = false;
let validateName = false;

$buttonPay = $('#btn-pay');

const validateNumberCard = (numb, typecard) => {
  numb = $('#cn').val();
  // if (numb && number.test(numb) && numb.length === 16) {
  if (number.test(numb) && numb.length === 16) {
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
  // activeButton();
};

// VALIDAR NOMBRE
// name --> sera el valor del input de nombre
const isNameValid = name => {
  var PATERNNAME = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
  name = $('#name').val();
  if (PATERNNAME.test(name)) {
    validateNumber = true;
    $('#name').addClass('success');
    $('#name').removeClass('error');
    return true;
  } else {
    validateNumber = false;
    $('#name').addClass('error');
    $('#name').removeClass('success');
  }
  // activeButton();
};

const validateCvv = cvv => {
  cvv = $('#cvv').val();
  if (number.test(cvv) && cvv.length === 3) {
    $('#cvv').addClass('success');
    $('#cvv').removeClass('error');
    return true;
  } else {
    $('#cvv').addClass('error');
    $('#cvv').removeClass('success');
  }
  // activeButton();
};

// const areAllValidationsPassing = () => {
//   if (validateNumberCard(numb, typecard) && isNameValid(name) && validateCvv(cvv)) {
//     $buttonPay.attr('disabled', true);
//   }
// };

// const activeButton = (btn) => {
//   btn.attr('disabled', false);
// };

// VALIDAR FECHA
// month --> sera el mes del input de la fecha ingresa, separar con split y separar mes de anio
// year --> la otra parte del input
// const isDateValid = (month,year) => {
//   if(regMonth.test(month) && regYear.test(year)){
//     validateDate = true;
//   }else{
//     validateDate = false;
//   }
// }

// ACTIVAR BUTTON
// button --> sera el el boton del form
const activeButton = button => {
  if (
    validateNumber === true &&
    // validateDate === true &&
    validateCVV === true &&
    validateName === true
  )
    button.removeAttr('disabled');
  else button.attr('disabled', 'disabled');
};
