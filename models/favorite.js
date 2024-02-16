const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Favorite extends Model { }

Favorite.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      }
    },
    jobs_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'jobs',
        key: 'id',
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'favorite',
  }
);



module.exports = Favorite;