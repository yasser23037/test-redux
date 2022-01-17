import {ADD, DELETE, DONE} from './action-Type';


export const addHandler = ()=> {
    return{
        type: ADD,
    }
}
export const deleteHandler =()=> {
    return{
        type: DELETE,
    }
}
export const doneHandler =()=> {
    return{
        type: DONE,
    }
}
