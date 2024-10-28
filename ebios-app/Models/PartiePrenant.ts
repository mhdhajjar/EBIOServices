// models/PartiePrenant.ts
import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/db';
import { Ecosysteme } from './Ecosysteme';

interface PartiePrenantAttributes {
    id: number;
    Nom: string;
    Activite: string;
    Depandance: string;
    Penetration: string;
    Maturite: string;
    Confiance: string;
    NiveauMenace: number;
    IdEcosysteme: number;
}

interface PartiePrenantCreationAttributes extends Optional<PartiePrenantAttributes, 'id'> { }

export class PartiePrenant extends Model<PartiePrenantAttributes, PartiePrenantCreationAttributes> implements PartiePrenantAttributes {
    public id!: number;
    public Nom!: string;
    public Activite!: string;
    public Depandance!: string;
    public Penetration!: string;
    public Maturite!: string;
    public Confiance!: string;
    public NiveauMenace!: number;
    public IdEcosysteme!: number;

    public static associate() {
        PartiePrenant.belongsTo(Ecosysteme, { foreignKey: 'IdEcosysteme', onDelete: 'CASCADE' });
    }
}

PartiePrenant.init({
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    Nom: { type: DataTypes.STRING(100), allowNull: false },
    Activite: { type: DataTypes.TEXT, allowNull: false },
    Depandance: { type: DataTypes.STRING(1), allowNull: false },
    Penetration: { type: DataTypes.STRING(1), allowNull: false },
    Maturite: { type: DataTypes.STRING(1), allowNull: false },
    Confiance: { type: DataTypes.STRING(1), allowNull: false },
    NiveauMenace: { type: DataTypes.FLOAT, allowNull: false },
    IdEcosysteme: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
}, {
    sequelize,
    tableName: 'parties_prenantes',
});
