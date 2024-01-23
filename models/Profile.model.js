module.exports = (sequelize, Sequelize) => {
  const Profile = sequelize.define("profile", {
      profileId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      profilePicture: {
          type: Sequelize.BLOB,
          allowNull: false
      },
      description: {
          type: Sequelize.STRING,
          allowNull: false
      },
      vipLevel: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      userId: {
          type: Sequelize.INTEGER,
          allowNull: true
      }
  });

  return Profile;
};
