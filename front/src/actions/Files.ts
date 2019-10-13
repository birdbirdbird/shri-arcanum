export function loadFilesList(repo: string, branch: string, path: string) {
  return (dispatch: any) => {    
  return fetch(`http://127.0.0.1:9000/api/repos/${repo}/tree/${branch}/${path}`)
    .then(res => res.json())
    .then(files => {
      console.log(files)
      dispatch({
        type: "FILES_LIST_LOAD",
        payload: files
      });
    });
  }
}
