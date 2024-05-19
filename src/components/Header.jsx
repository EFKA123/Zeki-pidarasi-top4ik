import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import avatar from '../img/avatar.png'
import { Link } from 'react-router-dom';

export const Header = ({setExpanded}) => {
    return (
    <header className='header'>
        <div className="header_links">
            <Link className='header_link' to={"/drivers"} >Водители</Link>
            <Link className='header_link' to={"/directions"}  >Направления</Link>
            <Link className='header_link' to={"/passengers"} >Пассажиры</Link>
            <Link className='header_link' to={"/cities"} >Города</Link>
        </div>
     
    </header>
  )
}
