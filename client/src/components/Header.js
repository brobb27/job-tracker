import React from 'react'

function Header() {
    return (
        <div id="navbar">
            <a id="navbarTitle" href='#navbar'>Job Tracker</a>
            <div id="navbarLinks">
                <a className="navbarLink" href='#navbar'>HOME</a>
                <a className="navbarLink" href='#navbar'>ABOUT</a>
                <a className="navbarLink" href='#navbar'>CONTACT</a>
            </div>
        </div>
    )
}

export default Header
