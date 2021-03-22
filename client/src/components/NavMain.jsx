import React from 'react'

import { Link } from "react-router-dom"


export default function NavMain() {
    return (
        <div>
            <Link to="/">Home Page / </Link>
            <Link to="/books/list">All books / </Link>
            <Link to="/books/create">Add book</Link>
        </div>
    )
}
