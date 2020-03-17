// server API calls
module.exports = {
  addUser(firstName, lastName) {
    return fetch('/addUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName, lastName }),
    })
      .then((response) => response.json());
  },
};
