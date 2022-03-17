import { useState } from 'react';
// import './App.css';
import TodoList from './Components/TodoList';
import { Item } from './models';

function App() {
    const [items, setItems] = useState([
        {
            id: 1,
            text: 'Learn Javascript',
            completed: false,
        },
        {
            id: 2,
            text: 'Learn React',
            completed: false,
        },
        {
            id: 3,
            text: 'Build a React App',
            completed: false,
        },
    ]);

    const [filter, setFilter] = useState('Active')

    let title = 'Things to do';

    // ham them item moi => nen su dung useRef
    const setData = (value: any) => {
        const newValue: Item = { id: items.length + 1, text: value, completed: false };
        setItems((): any => {
            return [...items, newValue];
        });
    };

    const setChange = (value: any, id:any) => {
        const itemsCopy = items;
        itemsCopy.map((item) => { if (item.id === id) {
            item.completed = value;
        } })

        setItems(itemsCopy);
    }

    // ham setActive dung de filter
    const setActive = (tem:any) => {
        setFilter(tem);
    }

    return (
        <div className="App container">
            <div className="row">
                <TodoList setData={setData} title={title} items={items}  filter={filter} setActive={setActive} setChange={setChange}/>
            </div>
        </div>
    );
}

export default App;
