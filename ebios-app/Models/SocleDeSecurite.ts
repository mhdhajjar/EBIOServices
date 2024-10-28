// models/SocleDeSecurite.ts
import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/db';
import { App } from './App';

interface SocleDeSecuriteAttributes {
    id: number;
    Name: string;
    IdApp: number;
}

interface SocleDeSecuriteCreationAttributes extends Optional<SocleDeSecuriteAttributes, 'id'> { }

export class SocleDeSecurite extends Model<SocleDeSecuriteAttributes, SocleDeSecuriteCreationAttributes> implements SocleDeSecuriteAttributes {
    public id!: number;
    public Name!: string;
    public IdApp!: number;

    public static associate() {
        SocleDeSecurite.belongsTo(App, { foreignKey: 'IdApp', onDelete: 'CASCADE' });
    }
}

SocleDeSecurite.init({
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    Name: { type: DataTypes.STRING(50), allowNull: false },
    IdApp: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false }
}, {
    sequelize,
    tableName: 'socle_de_securites',
});
