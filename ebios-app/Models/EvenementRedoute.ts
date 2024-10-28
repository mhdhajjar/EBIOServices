// models/EvenementRedoute.ts
import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/db';
import { ValeurMetier } from './ValeurMetier';

interface EvenementRedouteAttributes {
    id: number;
    Name: string;
    Description: string;
    TypeEvent: string;
    Consequence: string;
    IdValeurMetier: number;
}

interface EvenementRedouteCreationAttributes extends Optional<EvenementRedouteAttributes, 'id'> { }

export class EvenementRedoute extends Model<EvenementRedouteAttributes, EvenementRedouteCreationAttributes> implements EvenementRedouteAttributes {
    public id!: number;
    public Name!: string;
    public Description!: string;
    public TypeEvent!: string;
    public Consequence!: string;
    public IdValeurMetier!: number;

    public static associate() {
        EvenementRedoute.belongsTo(ValeurMetier, { foreignKey: 'IdValeurMetier', onDelete: 'CASCADE' });
    }
}

EvenementRedoute.init({
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    Name: { type: DataTypes.STRING(50), allowNull: false },
    Description: { type: DataTypes.TEXT, allowNull: false },
    TypeEvent: { type: DataTypes.STRING(50), allowNull: false },
    Consequence: { type: DataTypes.STRING(50), allowNull: false },
    IdValeurMetier: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false }
}, {
    sequelize,
    tableName: 'evenement_redoutes',
});
