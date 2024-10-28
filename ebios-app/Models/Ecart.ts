// models/Ecart.ts
import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/db';
import { SocleDeSecurite } from './SocleDeSecurite';

interface EcartAttributes {
    id: number;
    TypeEcart: string;
    Justification: string;
    IdSocleSecurite: number;
}

interface EcartCreationAttributes extends Optional<EcartAttributes, 'id'> { }

export class Ecart extends Model<EcartAttributes, EcartCreationAttributes> implements EcartAttributes {
    public id!: number;
    public TypeEcart!: string;
    public Justification!: string;
    public IdSocleSecurite!: number;

    public static associate() {
        Ecart.belongsTo(SocleDeSecurite, { foreignKey: 'IdSocleSecurite', onDelete: 'CASCADE' });
    }
}

Ecart.init({
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    TypeEcart: { type: DataTypes.TEXT, allowNull: false },
    Justification: { type: DataTypes.TEXT, allowNull: false },
    IdSocleSecurite: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
}, {
    sequelize,
    tableName: 'ecarts',
});
