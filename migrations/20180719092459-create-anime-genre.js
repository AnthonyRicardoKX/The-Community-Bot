'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('anime_genre', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            anime: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'anime',
                    key: 'id'
                }
            },
            mal_genre: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)')
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)')
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('anime_genre');
    }
};
