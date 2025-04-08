import projectService from "../services/projectService.js";

export const getAllProjects = async (req, res) => {
    const projects = await projectService.getAllProjects();
    res.json({ statusCode: 200, data: projects, message: "Success" });
};
