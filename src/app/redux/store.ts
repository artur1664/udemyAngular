import {INCREMENT, SET_REQUIRED, UPDATE_VALUES} from "./actions";
import {tassign} from "tassign";
import {Message} from "./model/message";

export interface MyAppState {
  counter: number;
  message: Message;
}

//redux is based on pure functions
//pure function is function that dont modify input state!!
//instead it returns new state keeping input untouched
//write unit test to test if function is pure!
export function rootReducer(state: MyAppState, action): MyAppState {
  switch (action.type) {
    case INCREMENT:
      //important to note! I am returning new state, not modifying actual
      //object.assign will not prevent creating new properties that dont belong do model
      // return Object.assign({}, state, {counter: state.counter + 1, additionalField: 12})
      return tassign(state, {counter: state.counter + 1});
    case SET_REQUIRED:
      //deep clone with JSON
      let result: MyAppState = JSON.parse(JSON.stringify(state));
      result.message.options.required = true;
      console.log(result);
      return result;
    case UPDATE_VALUES:
      let stateCopy: MyAppState = JSON.parse(JSON.stringify(state));
      stateCopy.message = action.body;
      console.log(stateCopy);
      return stateCopy;
  }

  return state;
}

//pass that object to initial state in module to method configureStore
export const INITIAL_STATE: MyAppState = {
  counter: 0,
  message: {
    text: 'default initial text',
    options: {
      level: 'INFO',
      required: false
    }
  }
}
