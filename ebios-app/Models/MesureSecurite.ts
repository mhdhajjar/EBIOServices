// models/MesureSecurite.ts
import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/db';
import { CheminStrategique } from './CheminStrategique';

interface MesureSecuriteAttributes {
    id: number;
    IdCheminStrategique: number;
    Mesure: string;
    MenaceResiduel: number;
}

interface MesureSecuriteCreationAttributes extends Optional<MesureSecuriteAttributes, 'id'> { }

export class MesureSecurite extends Model<MesureSecuriteAttributes, MesureSecuriteCreationAttributes> implements MesureSecuriteAttributes {
    public id!: number;
    public IdCheminStrategique!: number;
    public Mesure!: string;
    public MenaceResiduel!: number;

    public static associate() {
        MesureSecurite.belongsTo(CheminStrategique, { foreignKey: 'IdCheminStrategique', onDelete: 'CASCADE' });
    }
}

MesureSecurite.init({
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    IdCheminStrategique: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
    Mesure: { type: DataTypes.TEXT, allowNull: false },
    MenaceResiduel: { type: DataTypes.FLOAT, allowNull: false },
}, {
    sequelize,
    tableName: 'mesures_securite',
});
