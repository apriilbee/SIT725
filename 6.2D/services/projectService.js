import Project from "../models/Projects.js";

export const getAllProjects = async () => {
    return await Project.find({});
};
