// Variables para las imágenes de los tipos de tarjetas
// Imágen tarjeta Visa
const visa = 'assets/img/visa.png';
// Imágen tarjeta Mastercard
const mastercard = 'assets/img/mastercad.png';
// Imágen Tarjeta American expres
const number = /^([0-9])*$/;

$buttonPay = $('#btn-pay');

let validateNumber = false;

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
      if (numb.match(/^4\d{3}-?\d{4}-?\d{4}-?\d{4}$/)) {
        typecard.attr('src', visa);
      }
      if (numb.match(/^5[1-5]\d{2}-?\d{4}-?\d{4}-?\d{4}$/)) {
        typecard.attr('src', mastercard);
      }
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
