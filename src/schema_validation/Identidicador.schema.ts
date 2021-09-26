import { param } from 'express-validator';

export const identificadorSchema = [
  param('id').custom((value) => {
    if (!value) {
      return true;
    }
    var reg = /^[0-9]*$/;
    if (reg.test(value)) {
      return true;
    }
    return Promise.reject('Id Invalido');
  }),
];
