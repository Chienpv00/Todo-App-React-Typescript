import { ChangeEvent, useState } from 'react';
import * as KeyCode from 'keycode-js';

type Props = {
    setData: (value: any) => void;
};

function InputBox({ setData }: Props) {
    const [value, setValue] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    };

    const HandleKeyUp = (e: any) => {
        if (e.keyCode === KeyCode.KEY_RETURN) {
            value.trim();
            if(value!==""){
                setData(value);
                setValue('');
            }
        }
    };

    return (
        <>
            <input
                type="text"
                className="form-control mb-3 add-todo"
                value={value}
                onChange={handleChange}
                placeholder="Add new"
                onKeyUp={HandleKeyUp}
            />

            {/* <input 
                type="text" 
                className="form-control mb-3" 
                placeholder='Search item'
            /> */}
        </>
    );
}

export default InputBox;
