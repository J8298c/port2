import {SET_PROJECTS} from '../actions/action';

export default (state = [], action)=>{
    if(action.type === SET_PROJECTS){
        const {projects} = action;
        return projects;
    }
    return state;
}