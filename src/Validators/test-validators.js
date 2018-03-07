import { withParams, req } from 'vuelidate/lib/validators/common';

const maxMin = withParams({ type: 'maxMin' }, req);

export { maxMin as default };
