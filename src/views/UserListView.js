import React from 'react';
import UserList from '../components/UserList/UserList';
import Alert from '../components/Alert/Alert';
import Header from '../components/Header/Header';

const UserListView = props => {
  return (
    <div className="App">
      <Header title="User List"></Header>
      <UserList {...props}></UserList>
      <Alert setAlert={props.setAlert}>{props.alert}</Alert>
    </div>
  );
};

export default UserListView;