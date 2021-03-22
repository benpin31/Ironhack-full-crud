import React from 'react'

import BookList from './../components/BooksList'
import NavMain from './../components/NavMain'

export default function AllBooks() {
    return (
        <div>
            <NavMain/>
            <h1>All books</h1>
            <BookList />
        </div>
    )
}
