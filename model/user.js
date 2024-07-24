import { DataTypes } from "sequelize";

export const userModel = (sequelize) => {
    return sequelize.define("user", {
        user: {
            type: DataTypes.TEXT,
            allowNull: false, 
            field: 'user'     
        },
        NAME: {
            type: DataTypes.TEXT,
            allowNull: false, 
            field: 'NAME'    
        },
        // Email:{
        //     type:   DataTypes.STRING,
        //     aloowNull: false,
        //     field:'Email'
        // },
    }, {
        
        tableName: 'users'  
    });
};
