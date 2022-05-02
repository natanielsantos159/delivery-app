const NAME_ERROR_MESSAGE = 'O nome deve ter menos de 12 caractéres';
const EMAIL_ERROR_MESSAGE = 'Insira um e-mail válido';
const PASSWORD_ERROR_MESSAGE = 'A senha deve ter mais de 6 caractéres';

const NAME_MAX_LENGTH = 11;
const PASSWORD_MINIMUM_LENGTH = 6;

const validateName = (name) => {
  const isValidName = name.length <= NAME_MAX_LENGTH;
  return {
    error: !isValidName,
    message: !isValidName && NAME_ERROR_MESSAGE };
};

const validateEmail = (email) => {
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const isValidEmail = emailRegex.test(email);
  return {
    error: !isValidEmail,
    message: !isValidEmail && EMAIL_ERROR_MESSAGE };
};

const validatePassword = (password) => {
  const isValidPassword = password.length >= PASSWORD_MINIMUM_LENGTH;
  return {
    error: !isValidPassword,
    message: !isValidPassword && PASSWORD_ERROR_MESSAGE };
};

export { validatePassword, validateEmail, validateName };
