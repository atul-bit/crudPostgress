module.exports = (sequelize, Sequelize) => {
    const testTable = sequelize.define("test", {
      id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      age : {
        type : Sequelize.INTEGER
      },
      admin : {
        type : Sequelize.ENUM('yes','no')
      }
    });
  
    return testTable;
  };
  