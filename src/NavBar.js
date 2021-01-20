import React from 'react'
import {Link} from 'react-router-dom'

function NavBar(){
    return(
        <ul>
            <div className="bruh-button">
            <div class="topnav">
            <Link to="/"><button className="home-button">Home</button></Link>
            <div class="divider"/>
            <Link to="/review"><button className="review-button">Review</button></Link>
            <div class="divider"/>
            <Link to="/todo-list"><button className="todo-app-button">Todo List</button></Link>
            </div>
            </div>
        </ul>
    );
}

export default NavBar;