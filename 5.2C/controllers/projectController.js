const projectService = require('../services/projectService');

module.exports.getAllProjects = async (req, res) => {
  const projects = await projectService.getAllProjects();
  res.json({ statusCode: 200, data: projects, message: "Success" });
};
