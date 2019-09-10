import React from 'react';
import UserListView from '../views/UserListView';
import UserFormView from '../views/UserFormView';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const UserRouter = appProps => {

  return (
    <Router>
      <Switch>

        {/* List of users */}
        <Route exact path="/" render={props => <UserListView {...props} {...appProps}></UserListView>} />

        {/* Create users */}
        <Route exact path="/create"
          render={props => <UserFormView {...props} {...appProps}></UserFormView>} />

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
                return <UserFormView {...props} {...appProps}
                  userUpdated={user}
                  fields={updatedFields}
                  title={`${user.firstName} ${user.lastName}`}></UserFormView>;
              }} />
          );
        })}
      </Switch>
    </Router>
  );
};

export default UserRouter;