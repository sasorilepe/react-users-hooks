import React, { useState, useEffect } from 'react';
import UserRouter from './routes/UserRouter'
import { getAllUsers } from './controllers/UserController';
import './App.css';

function App() {

  const [users, setUsers] = useState([]);

  const [alert, setAlert] = useState(null);

  const updateUsers = async () => {
    const response = await getAllUsers();
    const userData = response.results;
    setUsers(userData);
  }

  const fields = [
    { label: 'First Name', placeholder: 'i.e John', name: 'firstName', type: 'text' },
    { label: 'Last Name', placeholder: 'i.e Doe', name: 'lastName', type: 'text' },
    { label: 'Age', placeholder: 'i.e 21', name: 'age', type: 'number' }
  ];

  useEffect(() => {
    updateUsers();
  }, []);

  return (
    <UserRouter
      users={users}
      updateUsers={updateUsers}
      alert={alert}
      setAlert={setAlert}
      fields={fields}>
    </UserRouter>
  );
}

export default App;
