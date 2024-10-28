// models/Mission.ts
import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/db';
import { App } from './App';
import { ValeurMetier } from './ValeurMetier';
import { BienSupport } from './BienSupport';

interface MissionAttributes {
    id: number;
    description: string;
    Idapp: number;
}

interface MissionCreationAttributes extends Optional<MissionAttributes, 'id'> { }

export class Mission extends Model<MissionAttributes, MissionCreationAttributes> implements MissionAttributes {
    public id!: number;
    public description!: string;
    public Idapp!: number;

    public static associate() {
        Mission.belongsTo(App, { foreignKey: 'Idapp', onDelete: 'CASCADE' });
        Mission.hasMany(ValeurMetier, { foreignKey: 'IdMission' });
        Mission.hasMany(BienSupport, { foreignKey: 'IdMission' });
    }
}

Mission.init({
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    description: { type: DataTypes.TEXT, allowNull: true },
    Idapp: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false }
}, {
    sequelize,
    tableName: 'missions',
});
