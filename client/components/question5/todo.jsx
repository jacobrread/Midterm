import { useState, useContext } from 'react';
import { ApiContext } from '../../utils/api_context';

export const Todo = ({ todo }) => {
  const api = useContext(ApiContext);
  const [checkboxChecked, setCheckboxChecked] = useState(todo.isComplete);

  const onCheckboxChange = async (e) => {
    setCheckboxChecked(e.target.checked);

    await api.put(`/todos/${todo.id}`);
  };

  return (
    <div className="p-4 border-2 border-gray-500 rounded">
      <input type="checkbox" checked={checkboxChecked} onChange={onCheckboxChange} /> {todo.content}
    </div>
  );
};
