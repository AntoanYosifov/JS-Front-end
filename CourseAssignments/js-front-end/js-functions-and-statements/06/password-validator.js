function passwordValidator(password) {

  let isValid = true;

  if (password.length < 6 || password.length > 10) {
    console.log('Password must be between 6 and 10 characters');
    isValid = false;
  }

  if (hasSpecialCharacters(password)) {
    console.log('Password must consist only of letters and digits');
    isValid = false;
  }

  if(!hasAtLeastTwoDigits(password)) {
    console.log('Password must have at least 2 digits');
    isValid = false;
  }

  if(isValid) {
    console.log('Password is valid');
  }

  function hasSpecialCharacters(str) {
    let regex = /[^a-zA-Z0-9]/;
    return regex.test(str);
  }


  function hasAtLeastTwoDigits(str) {
    let regex = /\d.*\d/;
    return regex.test(str);
  }
}

passwordValidator('logIn');
console.log('----');
passwordValidator('MyPass123');
console.log('----');
passwordValidator('Pa$s$s');

