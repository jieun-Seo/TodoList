import './App.css';
import React, {useState} from 'react';
import TodoBoard from './components/TodoBoard';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addList = () => {
    setTodoList([...todoList, inputValue])
  }

  return (
    <div className='title'>
      <input type="text" onChange={(event)=>setInputValue(event.target.value)} value={inputValue}/>
      <button onClick={addList}>추가</button>

      <TodoBoard todoList={todoList}></TodoBoard>
    </div>
  );
}

export default App;
