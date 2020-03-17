// server API calls
module.exports = {
  addUser(newUser) {
    return fetch('/addStudent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json());
  },
  updateUser(update) {
    return fetch('/updateStudent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(update),
    })
      .then((response) => response.json());
  },
};
