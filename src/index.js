  // VARIABLES PARA JALAR IMAGENES DE TARJETAS
  // Imágen tarjeta Visa
  const visa = '../public/assets/img/visa.png';
  // Imágen tarjeta Mastercard
  const mastercard = 'assets/img/mastercad.png';
  // Imágen Tarjeta American expres
  const americanexpres = '../public/assets//img/aex.png'
  // EXPRESIONES REGURALES PARA VALIDAR LOS NUMEROS DE LAS TARJETAS DE CREDITO
  // Tarjeta  visa
  const numberVisa = /^4\d{3}-?\d{4}-?\d{4}-?\d{4}$/;
  // Tarjeta Mastercad 
  const numberMastercard = /5[1-5][0-9]{14}$/;
  // Tarjeta American Express
  const numberAmericanExpress = /^3[47][0-9]{13}$/;

  // EXPRESION REGULAR PARA VALIDAR NUMERO
  const number = /^([0-9])*$/;

  // EXPRESION REGULAR PARA VALIDAR NOMBRE
  const PATERNNAME = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;

  let validateNumber = false;
  
  // Algoritmo de Luhn para validar Tarjeta de credito
  let validateNumberCard = (numb) => {
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
        if (numb.match(numberVisa)) {
          $typeOfCard.attr('src', visa);
        }
        if (numb.match(numberMastercard)) {
          $typeOfCard.attr('src', mastercard);
        }
        if(numb.match(numberMastercard)){
          $typeOfCard.attr('src', americanexpres);
        }
      } else {
        validateNumber = false;
        alert('Usted no esta ingresando un numero de tarjeta valida');
        $typeOfCard.attr('src', '');
      }
    } else {
      validateNumber = false;
      alert('Usted no esta ingresando un numero de tarjeta valida');
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