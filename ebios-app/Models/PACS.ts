// models/PACS.ts
import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/db';

interface PACSAttributes {
    id: number;
    Nom: string;
    Type: string;
    Impact: number;
    CoefficientRisques: number;
}

interface PACSCreationAttributes extends Optional<PACSAttributes, 'id'> { }

export class PACS extends Model<PACSAttributes, PACSCreationAttributes> implements PACSAttributes {
    public id!: number;
    public Nom!: string;
    public Type!: string;
    public Impact!: number;
    public CoefficientRisques!: number;
}

PACS.init({
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    Nom: { type: DataTypes.STRING(100), allowNull: false },
    Type: { type: DataTypes.STRING(50), allowNull: false },
    Impact: { type: DataTypes.FLOAT, allowNull: false },
    CoefficientRisques: { type: DataTypes.FLOAT, allowNull: false },
}, {
    sequelize,
    tableName: 'pacs',
});
