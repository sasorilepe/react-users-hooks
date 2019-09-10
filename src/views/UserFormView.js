import React from 'react';
import Header from '../components/Header/Header';
import UserForm from '../components/UserForm/UserForm';

const UserFormView = props => {

  return (
    <div className="App">
      <Header title="Add New User"></Header>
      <UserForm {...props}></UserForm>
    </div>
  );
};

export default UserFormView;