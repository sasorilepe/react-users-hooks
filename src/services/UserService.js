const apiUrl = 'http://localhost:3500/v1/users';

const getRequest = (url, settings = {}) => {
  return fetch(url, settings)
    .then(response => response.status === 204 ? Promise : response.json())
    .catch(error => console.error(error));
};

const getAll = () => getRequest(apiUrl);

const createOne = settings => getRequest(apiUrl, settings);

const modifyOne = (id, settings) => getRequest(`${apiUrl}/${id}`, settings);

export {
  getAll,
  createOne,
  modifyOne
};