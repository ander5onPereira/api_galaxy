import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('funcionarios')
export default class Funcionarios {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar')
  nome: string;

  @Column('varchar')
  sobrenome: string;

  @Column('varchar')
  email: string;

  @Column('varchar')
  nis: string;
}
