import {DELETE, DONE, ADD} from './action-Type';

const initialState=[
    { text: "save the galaxy", id: 1, isDone: false },
    { text: "walk the cat ", id: 2, isDone: false },
    { text: "attend the workshop ", id: 3, isDone: false },
  ];


  export const counterReducer = (state=initialState , action ) => {
      switch (action.type) {
          case DELETE:
              return{
                  
              }
              default: return state
      }
  }