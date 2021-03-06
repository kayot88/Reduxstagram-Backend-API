"use strict";


module.exports = function(sequelize, DataTypes){
    const Comments = sequelize.define('comments', {
        commentId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    });

    Comments.associate = function(models){
        Comments.belongsTo(models.user, {
          foreignKey: 'userId',
            onDelete: 'CASCADE'
        }),
        Comments.belongsTo(models.photos, {
          foreignKey: 'photoId',
            onDelete: 'CASCADE'
        });
    }

    return Comments;
}