module.exports = function(sequelize, DataTypes){
    var Messages = sequelize.define("Messages", {
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },

        message: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
              }
        }
    })
    return Messages;
}