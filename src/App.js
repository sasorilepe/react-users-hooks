import React, { useState } from 'react';
import UserRouter from './routes/UserRouter'
import './App.css';


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
    <UserRouter
      users={users}
      setUsers={setUsers}
      idCount={idCount}
      setIdCount={setIdCount}
      alert={alert}
      setAlert={setAlert}
      fields={fields}>
    </UserRouter>
  );
}

export default App;
