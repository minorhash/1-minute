function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h3>    Hello, {formatName(user)}
  </h3>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);

