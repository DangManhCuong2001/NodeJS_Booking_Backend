'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Quanly_bacsi extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Quanly_bacsi.init({
        doctorId: DataTypes.INTEGER,
        clinicID: DataTypes.INTEGER,
        specialtyId: DataTypes.INTEGER,

    }, {
        sequelize,
        modelName: 'Quanly_bacsi',
    });
    return Quanly_bacsi;
};