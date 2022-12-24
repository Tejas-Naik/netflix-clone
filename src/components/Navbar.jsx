import React, { useEffect, useState } from 'react';
import "../Navbar.css";

function Navbar() {

    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
                window.removeEventListener("scroll", () => { });
            } else handleShow(false)
        });

    }, []);

    return (
        <div className={`navbar ${show && "nav__black"}`}>
            <img
                className='nav__logo'
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158"
                alt="Netflix Logo"
            />
            <img
                className='nav__avatar'
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
                alt="Smiley Logo"
            />
        </div>
    )
}

export default Navbar;