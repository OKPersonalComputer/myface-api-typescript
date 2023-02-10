import React from "react";  // import React (to provide access to TSX)
import { useState } from "react";
import '../style/Menu.scss'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'



export function Menu() {
    const [menu, setMenu] = useState(false);

    return (
        <>
            <button className="button" data-testid="menu-button" onClick={() => setMenu(!menu)}>Menu</button>
            <nav data-testid="our-menu" className={menu ? "menu-appear" : "menu-wrapper"}>
                <ul className="menu">
                    <li className="menu-items" ><Link to="/" onClick={() => setMenu(!menu)}>Home</Link></li>
                    <li className="menu-items"><Link to="/posts" onClick={() => setMenu(!menu)}>Posts</Link></li>
                    <li className="menu-items"><Link to="/users" onClick={() => setMenu(!menu)}>Users List</Link></li>
                    <li className="menu-items"><Link to="/createuser" onClick={() => setMenu(!menu)}>Create New User</Link></li>
                </ul>
            </nav>

        </>
    )
}
