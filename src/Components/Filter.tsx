import Button from "./button"

type Props = {
    filter:string;
    setActive: (text:any)=>void;
};

function Filter({filter, setActive}: Props) {

    
    

    return (
        <>
            <Button Value={filter} text='All' setActive={setActive}/>
            <Button Value={filter} text='Active' setActive={setActive}/>
            <Button Value={filter} text='Completed' setActive={setActive}/>

        </>
    );
}

export default Filter;
