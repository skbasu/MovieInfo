import React, { useEffect, useState } from 'react';
import './NavBar.css';

function NavBar() {

    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 150){
                setShow(true)
            } else setShow(false);
        });
        return () => {
            window.removeEventListener('scroll', window, false);
        }
    }, [])


    return (
        <div className= {`navbar ${show && "navbar_black"}`}>
            <img
                className= 'nav_logo'
                src= 'https://logopond.com/logos/29c9d93968e1ff492c67f780d4ee8b1e.png'
                alt= 'Movie Info Logo'
            />
            <img
                className= 'nav_avatar' 
                src= 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                alt= 'Avatar Logo'
            />
        </div>
    );
}

export default NavBar;
