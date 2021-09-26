import { EntityRepository, Repository } from 'typeorm';
import Funcionarios from '../models/Funcionarios';

@EntityRepository(Funcionarios)
class FuncionariosRepositories extends Repository<Funcionarios> {}

export { FuncionariosRepositories };
