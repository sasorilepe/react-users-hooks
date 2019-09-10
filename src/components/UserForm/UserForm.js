import React from 'react';
import './UserForm.css';

const UserForm = props => {

  const handleSubmit = event => {

    event.preventDefault();

    const form = event.target;
    let user, id;

    if (props.userUpdated) {
      user = { ...props.userUpdated };
    } else {
      id = props.idCount + 1;
      user = { id };
    }

    // eslint-disable-next-line no-unused-vars
    for (const field of props.fields) {
      const formElement = form.querySelector(`#${field.name}`);
      const formValue = formElement.value;
      if (!formValue.replace(/\s/g, '')) {
        return alert(`${field.label} is required`);
      }
      user[field.name] = formValue;
    }

    const users = [...props.users];
    let alertMessage = `User "${user.firstName} ${user.lastName}" `;

    if (props.userUpdated) {
      const index = users.findIndex(originalUser => originalUser.id === user.id);
      users[index] = user;
      alertMessage += 'updated';
    } else {
      alertMessage += 'created';
      users.push(user);
      props.setIdCount(id);
    }

    props.setUsers(users);
    props.setAlert(alertMessage);
    props.history.push('/');
  };

  return (
    <form onSubmit={handleSubmit} className="App__user-form">
      {props.fields.map(field => {
        return (
          <div key={field.name} className="Input">
            <div className="Input__label">
              <label>{field.label}</label>
            </div>
            <input
              id={field.name}
              name={field.name}
              className="Input__input"
              placeholder={field.placeholder}
              defaultValue={field.value}
              type={field.type} />
          </div>
        );
      })}
      <input type="submit" className="App__user-form__save" value="SAVE" />
    </form>
  );
};

export default UserForm;