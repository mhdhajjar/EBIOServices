// models/App.ts
import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/db';
import { User } from './User';
import { Mission } from './Mission';
import { SocleDeSecurite } from './SocleDeSecurite';
import { SourceRisque } from './SourceRisque';
import { Ecosysteme } from './Ecosysteme';

interface AppAttributes {
    id: number;
    name: string;
    dateofcreation: Date;
    capital: string;
}

interface AppCreationAttributes extends Optional<AppAttributes, 'id'> { }

export class App extends Model<AppAttributes, AppCreationAttributes> implements AppAttributes {
    public id!: number;
    public name!: string;
    public dateofcreation!: Date;
    public capital!: string;

    public static associate() {
        App.belongsTo(User, { foreignKey: 'userid', onDelete: 'CASCADE' });
        App.hasMany(Mission, { foreignKey: 'Idapp' });
        App.hasMany(SocleDeSecurite, { foreignKey: 'IdApp' });
        App.hasMany(SourceRisque, { foreignKey: 'IdApp' });
        App.hasMany(Ecosysteme, { foreignKey: 'IdApp' });
    }
}

App.init({
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING(50), allowNull: false },
    dateofcreation: { type: DataTypes.DATE, allowNull: false },
    capital: { type: DataTypes.STRING(50), allowNull: false },
}, {
    sequelize,
    tableName: 'apps',
});
