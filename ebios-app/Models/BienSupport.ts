// models/BienSupport.ts
import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/db';
import { Mission } from './Mission';
import { ValeurMetier } from './ValeurMetier';

interface BienSupportAttributes {
    id: number;
    Name: string;
    IdMission: number;
    IdValeurMetier: number;
}

interface BienSupportCreationAttributes extends Optional<BienSupportAttributes, 'id'> { }

export class BienSupport extends Model<BienSupportAttributes, BienSupportCreationAttributes> implements BienSupportAttributes {
    public id!: number;
    public Name!: string;
    public IdMission!: number;
    public IdValeurMetier!: number;

    public static associate() {
        BienSupport.belongsTo(Mission, { foreignKey: 'IdMission', onDelete: 'CASCADE' });
        BienSupport.belongsTo(ValeurMetier, { foreignKey: 'IdValeurMetier', onDelete: 'CASCADE' });
    }
}

BienSupport.init({
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    Name: { type: DataTypes.STRING(50), allowNull: false },
    IdMission: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
    IdValeurMetier: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false }
}, {
    sequelize,
    tableName: 'bien_supports',
});
