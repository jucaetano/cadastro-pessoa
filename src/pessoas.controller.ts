import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Pessoa } from "./pessoa.model";
import { PessoasService } from "./pessoas.service";

@Controller('pessoas')
export class PessoasController {
    constructor(private pessoasService: PessoasService) {

    }

    @Get()
    async obterTodos(): Promise<Pessoa[]> {
        return this.pessoasService.obterTodos();
    }

    @Get(':id')
    async obterUm(@Param() params): Promise<Pessoa> {
        return this.pessoasService.obterUm(params.id);
    }

    @Post()
    async criar(@Body() pessoa: Pessoas) {
        this.pessoasService.criar(pessoa);
    }

    @Put()
    async alterar(@Body() pessoa: Pessoa): Promise<[number, Pessoa[]]> {
        return this.pessoasService.alterar(pessoa);
    }

    @Delete(':id')
    async apagar(@Param() params) {
        this.pessoasService.apagar(params.id);
    }
}