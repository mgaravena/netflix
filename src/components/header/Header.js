import React from 'react';
import './Header.css';

const Header = ({black}) => {
  return (
   <header className={black ? 'black' : ''}>
      <div className='header--logo'>
        <a href='/'>
           <img src='https://1000marcas.net/wp-content/uploads/2020/01/Netflix-simbolo.jpg'/>
        </a>
      </div>
      <div className='header--user'>
        <a href='/'>
           <img src='https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/02/da/80/02da8018-7ba4-005d-631d-8052126b75df/source/256x256bb.jpg'/>
        </a>
      </div>

   </header>
  )
}

export default Header