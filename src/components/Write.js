import { useState } from "react"

export default function Write(){
    const [title, setTitle] = useState('안녕');
    console.log('title',title);
    let name = '동현이';
    console.log('name',name);

    function changeTitle(){
        setTitle('바보');
    }
    function changeName(){
        name = '은영이';
    }
    return(
        <>
            <div>{name}</div>
            <div>{title}</div>
            <button onClick={changeTitle}>바보</button>
            <button onClick={changeName}>은영</button>
        </>
    )
}
