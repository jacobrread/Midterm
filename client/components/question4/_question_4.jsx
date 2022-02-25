import { useState, useEffect, useContext } from 'react';
import { ApiContext } from '../../utils/api_context';

export const Question4 = () => {
  // STOP! Don't modify this file!
  const api = useContext(ApiContext);
  const [users, setUsers] = useState([]);

  useEffect(async () => {
    const { users, error } = await api.get('/users');
    if (!error && users) {
      setUsers(users);
    }
  }, []);

  return (
    <div>
      <div>The users should show up here when you are done.</div>
      {users.map((user) => (
        <div key={user.id}>
          <div className="border-2 border-gray-500 rounded p-4">
            {user.firstName} {user.lastName} {user.email}
          </div>
        </div>
      ))}
    </div>
  );
};
