module.exports = (sequelize, DataTypes) => {
    
    const Users = sequelize.define("Users", {
        userName: {
            type: DataTypes.STRING, 
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
// This caused endless loop error
   // Users.associate = (models) => {
   //     Users.hasMany(models.Posts, {
   //         onDelete: "cascade",
   //     })
   // }
    return Users;
};