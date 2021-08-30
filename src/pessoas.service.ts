import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Pessoa } from "./pessoa.model";

@Injectable()
export class PessoasService {
    constructor(
        @InjectModel(Pessoa)
        private pessoaModel: typeof Pessoa
    ) {}

    async obterTodos(): Promise<Pessoa[]> {
        return this.pessoaModel.findAll();
    }

    async obterUm(id: number): Promise<Pessoa> {
        return this.pessoaModel.findByPk(id);
    }

    async criar(pessoa: Pessoa) {
        this.pessoaModel.create(pessoa);
    }

    async alterar(pessoa: Pessoa): Promise<[number, Pessoa[]]> {
        return this.pessoaModel.update(pessoa, {
            where: {
                id: pessoa.id
            }
        });
    }

    async apagar(id: number) {
        const pessoa: Pessoa = await this.obterUm(id);
        pessoa.destroy();
    }
}