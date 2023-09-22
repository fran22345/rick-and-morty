const validate = (inputs) => {
  let errors = {};

  if (inputs.email.length === 0 || inputs.email.length >= 35) {
    errors.email = "La longitud del correo electrónico debe estar entre 1 y 34 caracteres";
  }
  console.log(inputs.email.length)
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(inputs.email)) {
    errors.email = "El correo electrónico no es válido";
  }
  
  if (!/\d/.test(inputs.password) || !(inputs.password.length >= 6 && inputs.password.length <= 10)) {
    errors.password = "La contraseña debe tener al menos un número y una longitud entre 6 y 10 caracteres";
  }
  
  return errors;
};
export default validate;
