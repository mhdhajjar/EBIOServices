// models/Ecosysteme.ts
import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/db';
import { App } from './App';

interface EcosystemeAttributes {
    id: number;
    Description: string;
    IdApp: number;
}

interface EcosystemeCreationAttributes extends Optional<EcosystemeAttributes, 'id'> { }

export class Ecosysteme extends Model<EcosystemeAttributes, EcosystemeCreationAttributes> implements EcosystemeAttributes {
    public id!: number;
    public Description!: string;
    public IdApp!: number;

    public static associate() {
        Ecosysteme.belongsTo(App, { foreignKey: 'IdApp', onDelete: 'CASCADE' });
    }
}

Ecosysteme.init({
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    Description: { type: DataTypes.TEXT, allowNull: false },
    IdApp: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false }
}, {
    sequelize,
    tableName: 'ecosystemes',
});
