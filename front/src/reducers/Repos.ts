const INIT_STATE = {
  repos: [],
  activeRepo: '',
  repoBranches: ['master'],
  activeBranch : 'master',
  activePath: '',
  isRepoSelectOpen: false
}

export default function (state = INIT_STATE, action: any) {
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