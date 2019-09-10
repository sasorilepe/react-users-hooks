import React from 'react';
import './UserForm.css';
import { Link } from "react-router-dom";

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
    if (props.userUpdated) {
      const alert = `User "${user.firstName} ${user.lastName}" updated`;
      const index = users.findIndex(originalUser => originalUser.id === user.id);
      users[index] = user;
      props.setAlert(alert);
      props.setUsers(users);
      document.getElementById('sendForm').click();
    } else {
      const alert = `User "${user.firstName} ${user.lastName}" created`;
      users.push(user);
      props.setAlert(alert);
      props.setIdCount(id);
      props.setUsers(users);
      document.getElementById('sendForm').click();
    }
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
      <Link id="sendForm" to='/'></Link>
    </form>
  );
};

export default UserForm;