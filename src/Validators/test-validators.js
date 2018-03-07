import { req, withParams } from 'vuelidate/lib/validators/common';

const maxMin = (min, max) =>
  withParams({ type: 'max', min, max }, value =>
    !req(value) || ((!/\s/.test(value) || value instanceof Date) && +min <= +value && +max >= +value));

export { maxMin as default };

