import React from 'react';
import TodoItem from './TodoItem';
import Header from './Header';
import Footer from './Footer';
import { Item } from '../models';

type Props = {
    title: string;
    items: Item[];
    setData: (value: any) => void;
    filter: string;
    setActive: (text: any) => void;
    setChange: (value: any, id: any) => void;

};

function TodoList({ title, items, setData, filter, setActive, setChange }: Props) {
    // let items = [
    //     {
    //         id: 1,
    //         text: 'Learn Javascript',
    //         completed: false,
    //     },
    //     {
    //         id: 2,
    //         text: 'Learn React',
    //         completed: false,
    //     },
    //     {
    //         id: 3,
    //         text: 'Build a React App',
    //         completed: false,
    //     },
    // ];

    // let title = 'Things to do';
    const FilterList = applyFilter(items, filter);
    return (
        <>
            <Header setData={setData} title={title} />

            {/* Render ra todo item tu du lieu tu database */}
            
            <ul className="list-unstyled">
                {FilterList.map((item) => (
                    <TodoItem key={item.id} data={item}  setChange={setChange}/>
                ))}
            </ul>

            <Footer count={items.length} filter={filter} setActive={setActive} />
        </>
    );
}

const applyFilter = (list: Item[], filter: string) => {
    switch (filter) {
        case 'Active':
            return list.filter((item) => item.completed !== true);
        case 'Completed':
            return list.filter((item) => item.completed === true);
        default:
            return list;
    }
};

export default TodoList;
