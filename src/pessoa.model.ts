import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table
export class Pessoa extends Model<Pessoa> {
    @Column({
        type: DataType.STRING(20),
        allowNull: false,
    })
    tipo_pessoa: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    nome: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    razao_social: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    cpf: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    cnpj: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    sexo: string(1);

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    data_nasc: Date;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    email: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    telefone: string(20);

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    celular: string(20);

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    foto: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    endereco: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    numero: string(5);

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    complemento: string(50);

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    bairro: string(50);

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    cidade: string(50);

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    cidade: string(2);

}