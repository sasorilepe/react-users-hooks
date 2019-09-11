import React from 'react';
import './UserList.css';
import { Link } from "react-router-dom";
import { deleteUser } from '../../controllers/UserController';


const userList = props => {

  const handleDelete = userId => {

    deleteUser(userId)
      .then(() => {
        const users = [...props.users];
        const index = users.findIndex(user => user.id === userId);
        const userDeleted = users[index];
        const alert = `User "${userDeleted.firstName} ${userDeleted.lastName}" deleted`;
        props.updateUsers();
        props.setAlert(alert);
      });
  };

  return (
    <div className="App__user-list">
      {props.users.map(user => {
        return (
          <div className="User" key={user.id}>
            <div className="User__name">
              {user.firstName} {user.lastName}
            </div>
            <div className="User__actions">
              <Link to={`/edit/${user.id}`} className="User__actions__edit">
                EDIT
              </Link>
              <div onClick={() => handleDelete(user.id)} className="User__actions__remove">
                REMOVE
              </div>
            </div>
          </div>
        )
      })}
      <Link to="/create">
        <div className="App__user-list__button">
          <div>+</div>
        </div>
      </Link>
    </div>
  );
};

export default userList;