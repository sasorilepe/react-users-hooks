import React from 'react';
import Header from '../components/Header/Header';
import UserList from '../components/UserList/UserList';
import UserForm from '../components/UserForm/UserForm';
import Alert from '../components/Alert/Alert';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const UserRouter = appProps => {
  return (
    <Router>
      <Switch>

        {/* List of users */}
        <Route exact path="/"
          render={props => {
            return (
              <div className="App">
                <Header title="User List"></Header>
                <UserList {...props}
                  setAlert={appProps.setAlert}
                  setUsers={appProps.setUsers}
                  users={appProps.users}>
                </UserList>
                <Alert setAlert={appProps.setAlert}>{appProps.alert}</Alert>
              </div>
            );
          }} />

        {/* Create users */}
        <Route exact path="/create"
          render={props => {
            return (
              <div className="App">
                <Header title="Add New User"></Header>
                <UserForm {...props}
                  users={appProps.users}
                  idCount={appProps.idCount}
                  setIdCount={appProps.setIdCount}
                  setUsers={appProps.setUsers}
                  setAlert={appProps.setAlert}
                  fields={appProps.fields}>
                </UserForm>
              </div>
            );
          }} />

        {/* Edit users */}
        {appProps.users.map(user => {
          return (
            <Route key={user.id} exact path={`/edit/${user.id}`}
              render={props => {
                const updatedFields = appProps.fields.map(field => {
                  switch (field.name) {
                    case 'firstName':
                      return { ...field, value: user.firstName };
                    case 'lastName':
                      return { ...field, value: user.lastName };
                    default:
                      return { ...field, value: user.age };
                  }
                });
                return (
                  <div className="App">
                    <Header title={`${user.firstName} ${user.lastName}`}></Header>
                    <UserForm {...props}
                      userUpdated={user}
                      users={appProps.users}
                      setUsers={appProps.setUsers}
                      setAlert={appProps.setAlert}
                      fields={updatedFields}>
                    </UserForm>
                  </div>
                );
              }} />
          );
        })}
      </Switch>
    </Router>
  );
};

export default UserRouter;