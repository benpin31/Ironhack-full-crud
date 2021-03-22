import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { withRouter } from "react-router";

const axios = require('axios');


class BooksList extends Component {

    state = {
        books:null
    }

    async componentDidMount() {
        
        try {
            const books = await axios.get("http://localhost:4000/api/books/")
            this.setState({books: books.data})
        } catch(err) {
            console.log(err)
        }

    }

    handleDelete = async (id, event) => {
        event.preventDefault() ;
        try {
            await axios.delete("http://localhost:4000/api/books/"+id) ;
            const newList = [...this.state.books].filter(book => book._id !== id) ;
            console.log(newList)
            this.setState({books: newList})
        } catch(err) {
            console.log(err)
        }
    }

    render() {
        const {books} = this.state ;
        return (
            <div>
                { 
                    books
                        &&
                    <ul>
                        {books.map(book => <li key={book._id}>
                            <Link to={"/books/"+book._id}>{book.title}
                            </Link>
                            <button onClick={event => this.handleDelete(book._id, event)}>delete</button>
                            <button>
                                <Link to={{
                                        pathname: "/books/update/"+book._id,
                                        state: {book}
                                        }}>  
                                    Update
                                </Link>
                                </button>
                            </li>)}
                    </ul>
                    
                }
            </div>
        )
    }
}

export default withRouter(BooksList)


