const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'BlogPost',
                key: 'id'
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'User',
                key: 'id',
            },
            },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Comment'
    }
)

module.exports = Comment;