import React from 'react';
import { BsPlusLg, BsSearch } from 'react-icons/bs';
import Filter from './Filter';


type Props = {
    count: number;
    filter: string;
    setActive: (text: any) => void;
};

function Footer({ count, filter, setActive }: Props) {
    return (
        <footer>
            <div className="footer_icon">
                <span style={{ margin: '0 5px' }}>
                    <BsPlusLg />
                </span>
                <span style={{ margin: '0 5px' }}>
                    <BsSearch />
                </span>
            </div>
            <div className="">{count} item left</div>
            <div className="">
                <Filter filter={filter} setActive={setActive}/>
            </div>
        </footer>
    );
}

export default Footer;
