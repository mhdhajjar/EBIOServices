// models/ScenarioOperationnel.ts
import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/db';
import { CheminStrategique } from './CheminStrategique';

interface ScenarioOperationnelAttributes {
    id: number;
    Intitul: string;
    IdCheminStrategique: number;
    Connaitre: string;
    Rentrer: string;
    Trouver: string;
    Exploiter: string;
    Vraisemblence: string;
}

interface ScenarioOperationnelCreationAttributes extends Optional<ScenarioOperationnelAttributes, 'id'> { }

export class ScenarioOperationnel extends Model<ScenarioOperationnelAttributes, ScenarioOperationnelCreationAttributes> implements ScenarioOperationnelAttributes {
    public id!: number;
    public Intitul!: string;
    public IdCheminStrategique!: number;
    public Connaitre!: string;
    public Rentrer!: string;
    public Trouver!: string;
    public Exploiter!: string;
    public Vraisemblence!: string;

    public static associate() {
        ScenarioOperationnel.belongsTo(CheminStrategique, { foreignKey: 'IdCheminStrategique', onDelete: 'CASCADE' });
    }
}

ScenarioOperationnel.init({
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    Intitul: { type: DataTypes.STRING(100), allowNull: false },
    IdCheminStrategique: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
    Connaitre: { type: DataTypes.TEXT, allowNull: false },
    Rentrer: { type: DataTypes.TEXT, allowNull: false },
    Trouver: { type: DataTypes.TEXT, allowNull: false },
    Exploiter: { type: DataTypes.TEXT, allowNull: false },
    Vraisemblence: { type: DataTypes.STRING(1), allowNull: false },
}, {
    sequelize,
    tableName: 'scenarios_operationnels',
});
