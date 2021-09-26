import { Request, Response } from 'express';
import { EntityRepository, getCustomRepository } from 'typeorm';
import Funcionarios from '../models/Funcionarios';
import { ItFuncionario } from './../interface/Funcionarios.interface';
import { FuncionariosRepositories } from './../repositories/FuncionarioRepositories';

@EntityRepository(Funcionarios)
class FuncionariosController {
  async create(req: Request, res: Response) {
    const { nome, sobrenome, email, nis }: ItFuncionario = req.body;
    try {
      const funcionarioRepository = getCustomRepository(
        FuncionariosRepositories,
      );
      const funcionario = funcionarioRepository.create({
        nome,
        sobrenome,
        email,
        nis,
      });
      var funcionarioSalvo = await funcionarioRepository.save(funcionario);
      if (!funcionarioSalvo) {
        return res.sendStatus(401);
      }
      return res.status(201).json(funcionarioSalvo);
    } catch (error) {
      console.log(error.message);
      return res.sendStatus(500);
    }
  }
  async index(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const funcionario = [];

      const funcionarioRepository = getCustomRepository(
        FuncionariosRepositories,
      );

      if (!id) {
        const busca = await funcionarioRepository.find();
        Object.assign(funcionario, busca);
      } else {
        const busca = await funcionarioRepository.findOne({ id: Number(id) });
        Object.assign(funcionario, busca);
      }

      return res.status(200).json(funcionario);
    } catch (error) {
      return res.sendStatus(500);
    }
  }
  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.sendStatus(422);
      }

      const funcionarioRepository = getCustomRepository(
        FuncionariosRepositories,
      );

      await funcionarioRepository.delete({
        id: Number(id),
      });

      return res.status(204).json({ Message: 'success' });
    } catch (error) {
      return res.sendStatus(500);
    }
  }
  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const dados: ItFuncionario = req.body;

      const funcionarioRepository = getCustomRepository(
        FuncionariosRepositories,
      );

      const funcionario = await funcionarioRepository.find({ id: Number(id) });
      if (!funcionario) {
        return res.sendStatus(204);
      }

      await funcionarioRepository.update(Number(id), dados);
      return res.status(200).json({ Message: 'success' });
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  }
  async search(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const funcionarioRepository = getCustomRepository(
        FuncionariosRepositories,
      );

      if (!id) {
        return res.sendStatus(200);
      }
      const funcionario = await funcionarioRepository.find({
        id: Number(id),
      });

      return res.status(200).json(funcionario);
    } catch (error) {
      return res.sendStatus(500);
    }
  }
}
export default new FuncionariosController();
