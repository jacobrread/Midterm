import { useState, useContext } from 'react';
import { ApiContext } from '../../utils/api_context';
export const Todo = ({ todo }) => {
  const api = useContext(ApiContext);
  const [checkboxChecked, setCheckboxChecked] = useState(todo.isComplete);

  const onCheckboxChange = async (e) => {
    setCheckboxChecked(e.target.checked);
    // put your API call here!
    // you wont actually need to do anything with the result of the API call
    // because we are optimistically updating the state.
    // When you refresh the page you should see your state persist.
  };

  return (
    <div className="p-4 border-2 border-gray-500 rounded">
      <input type="checkbox" checked={checkboxChecked} onChange={onCheckboxChange} /> {todo.content}
    </div>
  );
};
