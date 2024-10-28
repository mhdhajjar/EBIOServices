// models/CheminStrategique.ts
import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/db';
import { SourceRisque } from './SourceRisque';
import { EvenementRedoute } from './EvenementRedoute';
import { PartiePrenant } from './PartiePrenant';

interface CheminStrategiqueAttributes {
    id: number;
    Intitul: string;
    Description: string;
    IdSourceRisque: number;
    IdEvenementRedoute: number;
    IdPartiePrenant: number;
    Gravite: string;
}

interface CheminStrategiqueCreationAttributes extends Optional<CheminStrategiqueAttributes, 'id'> { }

export class CheminStrategique extends Model<CheminStrategiqueAttributes, CheminStrategiqueCreationAttributes> implements CheminStrategiqueAttributes {
    public id!: number;
    public Intitul!: string;
    public Description!: string;
    public IdSourceRisque!: number;
    public IdEvenementRedoute!: number;
    public IdPartiePrenant!: number;
    public Gravite!: string;

    public static associate() {
        CheminStrategique.belongsTo(SourceRisque, { foreignKey: 'IdSourceRisque', onDelete: 'CASCADE' });
        CheminStrategique.belongsTo(EvenementRedoute, { foreignKey: 'IdEvenementRedoute', onDelete: 'CASCADE' });
        CheminStrategique.belongsTo(PartiePrenant, { foreignKey: 'IdPartiePrenant', onDelete: 'CASCADE' });
    }
}

CheminStrategique.init({
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    Intitul: { type: DataTypes.STRING(100), allowNull: false },
    Description: { type: DataTypes.TEXT, allowNull: false },
    IdSourceRisque: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
    IdEvenementRedoute: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
    IdPartiePrenant: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
    Gravite: { type: DataTypes.STRING(1), allowNull: false },
}, {
    sequelize,
    tableName: 'chemins_strategiques',
});
