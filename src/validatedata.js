console.log(data);

let users = Object.keys(data);
console.log(users);

validateNameinData = false;
validateNumberCardinData = false;
validateExpinData = false;
validateCvvinData = false; 


for (let i = 0; i < users.length; i++) {
  funtionValidateNameinData = (nameClient) => {
    if (users[i] === nameClient) {
      validateNameinData = true;
      console.log(validateNameinData);
    }else {
      validateNameinData = false;
      console.log(validateNameinData);
    }
  };

  funtionValidateNumberCardinData = (numberTarjet) => {
    if (numberTarjet === users[i].cardNumer) {
      validateNumberCardinData = true;
      console.log(validateNumberCardinData);
    }else {
      validateNumberCardinData = false;
      console.log(validateNumberCardinData);
    }
  },

  funtionValidateExpinData = (expDate) => {
    if (expDate === users[i].ffvv) {
      validateExpinData = true;
      console.log(validateExpinData);
    }else {
      validateExpinData = false;
      console.log(validateExpinData);
    }
  },

  funtionValidateCvvinData = (nameClient, cvv) => {
    if (cvv === users[i].cvv) {
      validateCvvinData = true;
      console.log(validateCvvinData);
    }else {
      validateCvvinData = false;
      console.log(validateCvvinData);
    }
  };
}
