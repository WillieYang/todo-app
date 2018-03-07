import { regex } from 'vuelidate/lib/validators/common';

const pwdLimit = regex('passwordLimit', /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z@_]{8,16}$/);

export { pwdLimit as default };
