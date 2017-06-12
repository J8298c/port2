export const SET_PROJECTS = 'SET_PROJECTS';
export function setProjects(projects){
    const action = {
        type: SET_PROJECTS,
        projects
    }
    return action;
}