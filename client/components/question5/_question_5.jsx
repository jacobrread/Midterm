import { useState, useEffect, useContext } from 'react';
import { ApiContext } from '../../utils/api_context';
import { Todo } from './todo';

export const Question5 = () => {
  const api = useContext(ApiContext);
  const [todos, setTodos] = useState([]);
  const [content, setContent] = useState('');

  useEffect(async () => {
    const { todos } = await api.get('/todos');
    setTodos(todos);
  }, []);

  const save = async () => {
    // make the api call to save a todo here.
    // remember to add the newly created todo item to the list of
    // todos with the setTodos method.
  };

  return (
    <div>
      <div className="flex">
        <input
          className="p-2 border-2 border-gray-500 rounded"
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          type="button"
          className="pt-2 pl-4 pb-2 pr-4 bg-blue-900 text-white shadow-md rounded font-bold"
          onClick={save}
        >
          SAVE
        </button>
      </div>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
};
