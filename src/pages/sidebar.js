import React from 'react'

import {Link} from 'react-router-dom'
function SideBar() {
    return (
        <div className="list-group list-group-flush">
            <ul className="navbar-nav footer table-responsive-lg" >
                <li className="nav-item-sidebar list-group-item-action list-group-item"><Link to={"/home"} className="nav-link">Home</Link></li>
                <li className="nav-item-sidebar list-group-item-action list-group-item"><Link to={"/checkploughingdate"} className="nav-link" >Check Plowing date</Link></li>
                <li className="nav-item-sidebar list-group-item-action list-group-item"><Link to={"/history"} className="nav-link" >History</Link></li>
                <li className="nav-item-sidebar list-group-item-action list-group-item"><Link to={"/about"} className="nav-link" >About</Link></li>
                <li className="nav-item-sidebar list-group-item-action list-group-item"><Link to={"/logout"} className="nav-link" >Logout</Link></li>
            </ul>
        </div>
    );
}

export default SideBar;