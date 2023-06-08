import {Link} from 'react-router-dom'

export default function Header(){
    const title = 'Our Diary';
    return (
        <div className='header'>
            <h1><Link to='/'>{title}</Link></h1>
        </div>
    )
}