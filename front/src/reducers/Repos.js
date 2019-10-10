import INIT_STATE from './initState'

export default function (state = INIT_STATE, action) {
  switch (action.type) {  
    case "REPOS_LIST_LOAD":
      return {
        ...state,
        repos: action.payload,
        activeRepo: action.payload[0]
      };
    case "TOGGLE_DROPDOWN":
      return {
        ...state,
        isRepoSelectOpen: action.payload
      };
      case "REPO_SELECT":
        return {
          ...state,
          activeRepo: action.payload,
          isRepoSelectOpen: false,
          activePath: ''
        };
    default:
      return state;
  }
}