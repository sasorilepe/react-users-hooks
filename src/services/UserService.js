const getAll = () => {
  return fetch('http://localhost:3500/v1/users')
    .then(response => response.json())
    .then(usersResponse => usersResponse);
};

export {
  getAll
};