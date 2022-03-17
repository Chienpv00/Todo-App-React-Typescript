import React from 'react';
import InputBox from './InputBox';

type Props = {
    title: string;
    setData: (value: any) => void;
};

function Header({ title, setData }: Props) {
    return (
        <>
            <h1>{title.toUpperCase()}</h1>
            <InputBox setData={setData} />
        </>
    );
}

export default Header;
