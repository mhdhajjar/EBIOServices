// models/SourceRisque.ts
import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/db';
import { App } from './App';

interface SourceRisqueAttributes {
  id: number;
  Name: string;
  IdApp: number;
}

interface SourceRisqueCreationAttributes extends Optional<SourceRisqueAttributes, 'id'> { }

export class SourceRisque extends Model<SourceRisqueAttributes, SourceRisqueCreationAttributes> implements SourceRisqueAttributes {
  public id!: number;
  public Name!: string;
  public IdApp!: number;

  public static associate() {
    SourceRisque.belongsTo(App, { foreignKey: 'IdApp', onDelete: 'CASCADE' });
  }
}

SourceRisque.init({
  id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
  Name: { type: DataTypes.STRING(50), allowNull: false },
  IdApp: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false }
}, {
  sequelize,
  tableName: 'source_risques',
});
