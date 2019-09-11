import React from 'react';
import './UserForm.css';
import { createNewUser, updateUser } from '../../controllers/UserController';

const UserForm = props => {

  const handleResponse = (resp, alertMessage) => {

    if (resp.ok) {

      const userUpdated = { ...resp.result };
      const users = [...props.users];

      if (props.userUpdated) {
        const index = users.findIndex(user => userUpdated.id === user.id);
        users[index] = userUpdated;
      } else {
        users.push(userUpdated);
      }

      props.setUsers(users);
      props.setAlert(alertMessage);
      props.history.push('/');

    } else {
      resp.errors.forEach(error => console.error(error));
    }
  };

  const handleSubmit = event => {

    event.preventDefault();

    const fields = [
      { label: 'First Name', name: 'firstName' },
      { label: 'Last Name', name: 'lastName' },
      { label: 'Age', name: 'age' }
    ];
    const form = event.target;

    let user = {};
    if (props.userUpdated) {
      user = { ...props.userUpdated };
    }

    // eslint-disable-next-line no-unused-vars
    for (const field of fields) {
      const formElement = form.querySelector(`#${field.name}`);
      const formValue = formElement.value;
      if (!formValue.replace(/\s/g, '')) {
        return alert(`${field.label} is required`);
      }
      user[field.name] = formValue;
    }

    let alertMessage = `User "${user.firstName} ${user.lastName}" `;

    if (props.userUpdated) {
      alertMessage += 'updated';
      return updateUser(user).then(resp => handleResponse(resp, alertMessage));
    }
    alertMessage += 'created';
    createNewUser(user).then(resp => handleResponse(resp, alertMessage));
  };

  return (
    <form onSubmit={handleSubmit} className="App__user-form">

      <div className="Input">
        <div className="Input__label">
          <label>First Name</label>
        </div>
        <input id="firstName" name="firstName" className="Input__input" placeholder="i.e John" type="text"
          defaultValue={props.userUpdated ? props.userUpdated.firstName : null} />
      </div>

      <div className="Input">
        <div className="Input__label">
          <label>Last Name</label>
        </div>
        <input id="lastName" name="lastName" className="Input__input" placeholder="i.e Doe" type="text"
          defaultValue={props.userUpdated ? props.userUpdated.lastName : null} />
      </div>

      <div className="Input">
        <div className="Input__label">
          <label>Age</label>
        </div>
        <input id="age" name="age" className="Input__input" placeholder="i.e 21" type="number"
          defaultValue={props.userUpdated ? props.userUpdated.age : null} />
      </div>

      <input type="submit" className="App__user-form__save" value="SAVE" />

    </form>
  );
};

export default UserForm;