import { Sequelize } from "sequelize";
import { userModel } from "./model/user.js";

export const connection = async () => {
  const sequelize = new Sequelize('postgres', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432
  });

  let User = null;
  
  try {
    
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    
   
    if (typeof userModel === 'function') {
      User = userModel(sequelize);
    } else {
      throw new Error('userModel is not a function');
    }

   
    await sequelize.sync();
    console.log('Table created successfully');
    
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
