import React from 'react';
import './UserForm.css';

const UserForm = props => {

  const fields = [
    { label: 'First Name', name: 'firstName' },
    { label: 'Last Name', name: 'lastName' },
    { label: 'Age', name: 'age' }
  ];

  const handleSubmit = event => {

    event.preventDefault();

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

    const users = [...props.users];
    let alertMessage = `User "${user.firstName} ${user.lastName}" `;

    if (props.userUpdated) {
      const index = users.findIndex(originalUser => originalUser.id === user.id);
      users[index] = user;
      alertMessage += 'updated';
    } else {
      alertMessage += 'created';
      users.push(user);
    }

    props.setUsers(users);
    props.setAlert(alertMessage);
    props.history.push('/');
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