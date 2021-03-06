'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('product', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            title: {
                type: Sequelize.STRING
            },
            link: {
                type: Sequelize.STRING
            },
            user: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'user',
                    key: 'id'
                }
            },
            product_type: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'product_type',
                    key: 'id'
                }
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
        return queryInterface.dropTable('product');
    }
};
