import React, { Component } from 'react';
import FormBook from './../components/FormBooks';
const axios = require('axios');


export default class CreateBook extends Component {

    handleAddBook = async (state) => {
        const {author, title, image} = state  ;
        const date = new Date(state.date).getFullYear() ; 
        try {
            const newBook = await axios.post("http://localhost:4000/api/books", {author, title, image, date}) ;
            this.props.history.push("/books/list")
        } catch(err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div>
                <h1>create books</h1>
                <FormBook handleSubmit={this.handleAddBook} />
            </div>
        )
    }
}
