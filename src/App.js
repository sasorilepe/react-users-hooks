import React, { useState } from 'react';
import './App.css';
import Header from './Header/Header';
import UserList from './UserList/UserList';
import UserForm from './UserForm/UserForm';
import Alert from './Alert/Alert';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {

  const [users, setUsers] = useState([
    { id: 1, firstName: 'Juan', lastName: 'Doe', age: 15 }
  ]);

  const [idCount, setIdCount] = useState(users.length);

  const [alert, setAlert] = useState(null);

  const fields = [
    { label: 'First Name', placeholder: 'i.e John', name: 'firstName', type: 'text' },
    { label: 'Last Name', placeholder: 'i.e Doe', name: 'lastName', type: 'text' },
    { label: 'Age', placeholder: 'i.e 21', name: 'age', type: 'number' }
  ];

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
                  setAlert={setAlert}
                  setUsers={setUsers}
                  users={users}>
                </UserList>
                <Alert setAlert={setAlert}>{alert}</Alert>
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
                  users={users}
                  idCount={idCount}
                  setIdCount={setIdCount}
                  setUsers={setUsers}
                  setAlert={setAlert}
                  fields={fields}>
                </UserForm>
              </div>
            );
          }} />

        {/* Edit users */}
        {users.map(user => {
          return (
            <Route key={user.id} exact path={`/edit/${user.id}`}
              render={props => {
                const updatedFields = fields.map(field => {
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
                      users={users}
                      setUsers={setUsers}
                      setAlert={setAlert}
                      fields={updatedFields}>
                    </UserForm>
                    <Alert setAlert={setAlert}>{alert}</Alert>
                  </div>
                );
              }} />
          );
        })}
      </Switch>
    </Router>
  );
}

export default App;
