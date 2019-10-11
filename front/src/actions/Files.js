export function loadFilesList(repo, branch, path) {
  return dispatch => {
  return fetch(`http://127.0.0.1:9000/api/repos/${repo}/tree/${branch}/${path}`)
    .then(res => res.json())
    .then(files => {
      dispatch({
        type: "FILES_LIST_LOAD",
        payload: files
      });
    });
  }
}
