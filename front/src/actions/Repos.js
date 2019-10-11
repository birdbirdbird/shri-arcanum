export function loadReposList() {
  return dispatch => {
  return fetch("http://127.0.0.1:9000/api/repos")
    .then(res => res.json())
    .then(repos => {
      dispatch({
        type: "REPOS_LIST_LOAD",
        payload: repos
      });
    });
  }
}

export function toggleDropdown(isOpen) {
  return dispatch => {
    return dispatch({
      type: "TOGGLE_DROPDOWN",
      payload: isOpen
    });
  }
}

export function repoSelect(repo) {
  return dispatch => {
    return dispatch({
      type: "REPO_SELECT",
      payload: repo
    });
  }
}