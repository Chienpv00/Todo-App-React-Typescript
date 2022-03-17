import { useState } from 'react';

type Props = {
    id: number;
    text: string;
    completed: boolean;
    setChange: () => void;
};

function TodoItem({ data, setChange }: Props | any) {
    const [check, setCheck] = useState(data.completed);

    const handleChange = () => {
        setCheck(!check);
        setChange(!check, data.id)
    };

    return (
        <>
            <li key={data.id} className="ui-state-default">
                <div className="checkbox">
                    <label>
                        <input type="checkbox" checked={check} onChange={handleChange} />
                        {data.text}
                    </label>
                </div>
            </li>
        </>
    );
}

export default TodoItem;
