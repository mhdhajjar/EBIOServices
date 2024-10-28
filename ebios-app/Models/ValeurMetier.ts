// models/ValeurMetier.ts
import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/db';
import { Mission } from './Mission';
import { BienSupport } from './BienSupport';
import { EvenementRedoute } from './EvenementRedoute';

interface ValeurMetierAttributes {
    id: number;
    Nom: string;
    Nature: 'Processus' | 'Information';
    Description: string;
    EntiteResponsable: string;
    IdMission: number;
}

interface ValeurMetierCreationAttributes extends Optional<ValeurMetierAttributes, 'id'> { }

export class ValeurMetier extends Model<ValeurMetierAttributes, ValeurMetierCreationAttributes> implements ValeurMetierAttributes {
    public id!: number;
    public Nom!: string;
    public Nature!: 'Processus' | 'Information';
    public Description!: string;
    public EntiteResponsable!: string;
    public IdMission!: number;

    public static associate() {
        ValeurMetier.belongsTo(Mission, { foreignKey: 'IdMission', onDelete: 'CASCADE' });
        ValeurMetier.hasMany(BienSupport, { foreignKey: 'IdValeurMetier' });
        ValeurMetier.hasMany(EvenementRedoute, { foreignKey: 'IdValeurMetier' });
    }
}

ValeurMetier.init({
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    Nom: { type: DataTypes.STRING(50), allowNull: false },
    Nature: { type: DataTypes.ENUM('Processus', 'Information'), allowNull: false },
    Description: { type: DataTypes.TEXT, allowNull: false },
    EntiteResponsable: { type: DataTypes.STRING(50), allowNull: false },
    IdMission: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false }
}, {
    sequelize,
    tableName: 'valeur_metiers',
});
