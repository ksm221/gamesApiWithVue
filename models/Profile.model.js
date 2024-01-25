module.exports = (sequelize, Sequelize) => {
  const Profile = sequelize.define("profile", {
      profileId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      description: {
          type: Sequelize.STRING,
          allowNull: true
      },
      vipLevel: {
          type: Sequelize.INTEGER,
          allowNull: true   
      },
      userId: {
          type: Sequelize.INTEGER,
          allowNull: true
      }
  });

  return Profile;
};
