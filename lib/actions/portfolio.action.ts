"use server";
import projects, { Project } from "@/constants/projects"

export async function useGetProject(id:string): Promise<Project> {

    // We need to load the projects and find by id
    const project = projects.find(item => item.id === id);
    return project 
}