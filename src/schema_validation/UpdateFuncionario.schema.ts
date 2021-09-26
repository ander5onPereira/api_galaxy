import { body } from 'express-validator';

export const updateFuncionarioSchema = [
  body('nome').custom((value) => {
    if (!value) {
      return true;
    }
    if (value.length < 2 || value.length > 30) {
      return Promise.reject('Nome invalido');
    }
    return true;
  }),
  body('sobrenome').custom((value) => {
    if (!value) {
      return true;
    }
    if (value.length < 2 || value.length > 50) {
      return Promise.reject('Sobrenome invalido');
    }
    return true;
  }),
  body('nis').custom((value) => {
    if (!value) {
      return true;
    }
    var reg = /^[0-9]*$/;
    if (reg.test(value)) {
      return true;
    }
    return Promise.reject('NIS invalido');
  }),
  body('email').custom((value) => {
    if (!value) {
      return true;
    }
    var reg = /\S+@\S+\.\S+/;
    if (reg.test(value)) {
      return true;
    }
    return Promise.reject('Email invalido');
  }),
];
