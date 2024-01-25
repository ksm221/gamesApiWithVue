const Sequelize = require('sequelize');
const { db } = require("../db");
const Profile = db.profiles;

exports.getAll = async (req, res) => {
  try {
    const profiles = await Profile.findAll({
      attributes: ["profileId", "description", "vipLevel", "userId"]
    });
    res.send(profiles);
  } catch (error) {
    console.log("profilesGetAll: ", error);
    res.status(500).send({ "error": "Something went wrong. Our team is looking into it." });
  }
};

exports.getByprofileId = async (req, res) => {
  try {
    console.log('Requested profileId:', req.params.profileId);

    const profile = await Profile.findByPk(req.params.profileId);
    if (profile) {
      res.send(profile);
    } else {
      res.status(404).send({ error: "Profile not found" });
    }
  } catch (error) {
    console.log("profilesGetByprofileId: ", error);
    res.status(500).send({ "error": "Something went wrong. Our team is looking into it." });
  }
};

exports.createNew = async (req, res) => {
  try {
    const profile = await Profile.create(req.body);
    res.status(201)
      .location(`${getBaseUrl(req)}/profiles/${profile.profileId}`)
      .json(profile);
    console.log(profile);
  } catch (error) {
    if (error instanceof Sequelize.ValidationError) {
      console.log(error);
      res.status(400).send({ "error": error.errors.map((item) => item.message) });
    } else {
      console.log("profilesCreate: ", error);
      res.status(500).send({ "error": "Something went wrong. Our team is looking into it." });
    }
  }
};

// exports.deleteByprofileId = async (req, res) => {
//   try {
//     const result = await Profile.destroy({ where: { profileId: req.params.profileId } });
//     if (result === 0 || result === undefined) {
//       res.status(404).send({ error: "Profile not found" });
//     } else {
//       res.status(204).send();
//     }
//   } catch (error) {
//     console.log("profilesDelete: ", error);
//     res.status(500).send({ "error": "Something went wrong. Our team is looking into it." });
//   }
// };

exports.updateByprofileId = async (req, res) => {
  try {
    delete req.body.profileId;
    const changedProfile = await Profile.update(req.body, { where: { profileId: req.params.profileId } });
    if (changedProfile === 0 || changedProfile === undefined) {
      res.status(404).send({ error: "Profile not found" });
    } else {
      const updatedProfile = await Profile.findByPk(req.params.profileId);
      res.status(200)
        .location(`${getBaseUrl(req)}/profiles/${updatedProfile.profileId}`)
        .json(updatedProfile);
    }
  } catch (error) {
    console.log("profilesUpdate: ", error);
    res.status(500).send({ "error": "Something went wrong. Our team is looking into it." });
  }
};

const getBaseUrl = (request) => {
  return (
    (request.connection && request.connection.encryption ? "https" : "http") +
    `://${request.headers.host}`
  );
};
