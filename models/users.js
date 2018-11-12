module.exports = function(sequelize, DataTypes){
    var User = sequelize.define("User", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            isUnique :true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [5]
              }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            isUnique :true,
            validate:{
                isEmail : true
            }
        },
        isDeleted: {
            type: DataTypes.BOOLEAN,
            default: false
        }
        
    })
    return User;
}