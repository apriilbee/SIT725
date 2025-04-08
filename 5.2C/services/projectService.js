const Project = require("../models/Projects");

exports.getAllProjects = async () => {
  return await Project.find({});
};
