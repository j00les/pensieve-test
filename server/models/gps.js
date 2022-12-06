"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class GPS extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GPS.init(
    {
      deviceId: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Device ID cannot be empty",
          },
          notNull: {
            msg: "Device ID cannot be null",
          },
        },
      },

      deviceType: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Device type cannot be empty",
          },
          notNull: {
            msg: "Device type cannot be null",
          },
        },
      },

      timestamp: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "GPS",
    }
  );
  return GPS;
};
