import React from 'react';

type Props = {
    text: string;
    Value: any;
    setActive: (text:any)=>void;
};

function Button({ text, Value, setActive }: Props) {

    const handleClick = () => {
        setActive(text);
    }

    if (Value === text) Value = Value + " test"
    return <button className={Value} onClick={handleClick}>{text}</button>;
}

export default Button;
