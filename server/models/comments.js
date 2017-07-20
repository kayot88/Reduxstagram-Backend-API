const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('comments', {
        comment_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrements: true
        },
        photo_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        comment: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false
        }
    })
}