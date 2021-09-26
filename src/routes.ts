import { Router } from 'express';
import FuncinariosControllers from './controllers/FuncinariosControllers';
import { ValidateSchema } from './middleware/ValidateSchema';
import { createFuncionarioSchema } from './schema_validation/CreateFuncionario.schema';
import { identificadorSchema } from './schema_validation/Identidicador.schema';
import { updateFuncionarioSchema } from './schema_validation/UpdateFuncionario.schema';

const router = Router();

router.delete(
  '/funcionario/:id?',
  identificadorSchema,
  ValidateSchema,
  FuncinariosControllers.delete,
);
router.get('/funcionario', FuncinariosControllers.index);
router.put(
  '/funcionario/:id?',
  updateFuncionarioSchema,
  ValidateSchema,
  FuncinariosControllers.update,
);
router.post(
  '/funcionario',
  createFuncionarioSchema,
  ValidateSchema,
  FuncinariosControllers.create,
);
router.get(
  '/search/:id?',
  identificadorSchema,
  ValidateSchema,
  FuncinariosControllers.search,
);

router.get('/status', (req, res, next) => {
  return res.status(200).send(true);
});

export default router;
