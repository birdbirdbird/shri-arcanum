import INIT_STATE from './initState'

export default function (state = INIT_STATE, action) {
  switch (action.type) {  
    case "FILES_LIST_LOAD":
      // onsole.log(action.payload)
      return {
        ...state,
        files: action.payload
      };
    default:
      return state;
  }
}