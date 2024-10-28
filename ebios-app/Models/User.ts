// models/User.ts
import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/db';
import { App } from './App';

interface UserAttributes {
    id: number;
    username: string;
    email: string;
    password: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> { }

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public id!: number;
    public username!: string;
    public email!: string;
    public password!: string;

    public static associate() {
        User.hasMany(App, { foreignKey: 'userid' });
    }
}

User.init({
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    username: { type: DataTypes.STRING(50), allowNull: false },
    email: { type: DataTypes.STRING(100), allowNull: false, unique: true },
    password: { type: DataTypes.STRING(100), allowNull: false }
}, {
    sequelize,
    tableName: 'users',
});
