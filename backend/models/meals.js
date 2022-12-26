'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Meals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Meals.init({
    meal_id: {
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    meal_user_id:{
      type:DataTypes.INTEGER,
      references:{model:'users',key:'user_id'}
    },
    meal_date:{ 
      type:DataTypes.DATE,
      allowNull:false
    },
    meal_description:{
      type: DataTypes.STRING,
      allowNull:false
    },
    meal_calories:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    protein: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    fat: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    carbs: {
      type:DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Meals',
    tableName:'meals',
    timestamps:false
  });
  return Meals;
};