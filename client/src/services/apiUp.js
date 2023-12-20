export const upFileCsv = body => {
  return fetch(`/api/v1/me`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(body)
  }).then(checkStatus)
}

export const getUsers = (args = {page: 1, size: 20}) => {
  const queries = Object.keys(args)
    .map(k => args[k] && `${k}=${JSON.stringify(args[k])}`)
    .join("&");
  return fetch(encodeURI(`/api/editique/users?${queries}`), {
    method: "GET",
    headers: {
      `Accept`: "application/json"
    }
  })
    .then(checkStatus)
    .then(response => response.json())
}
