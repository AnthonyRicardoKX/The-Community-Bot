'use strict';
module.exports = (sequelize, DataTypes) => {
    var Genre = sequelize.define('genre', {
        name: DataTypes.STRING
    }, {});
    Genre.associate = function(models) {
        // associations can be defined here
    };
    return Genre;
};
