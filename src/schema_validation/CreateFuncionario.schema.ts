import { body } from 'express-validator';

export const createFuncionarioSchema = [
  body('nome').isLength({ min: 2, max: 30 }).withMessage('Campo nome invalido'),
  body('sobrenome')
    .isLength({ min: 2, max: 50 })
    .withMessage('Campo sobrenome invalido'),
  body('email').isEmail().withMessage('Campo email invalido'),
  body('nis').isNumeric().withMessage('Campo nis invalido'),
];
