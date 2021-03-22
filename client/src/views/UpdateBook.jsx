import React, { Component } from 'react';
import FormBook from './../components/FormBooks';
const axios = require('axios');


export default class UpdateBook extends Component {

    handleUpdateBook = async (state) => {
        const {author, title, image} = state  ;
        const date = new Date(state.date).getFullYear() ; 
        console.log(this.props.match.params.id)
        try {
            const newBook = await axios.patch("http://localhost:4000/api/books/"+this.props.match.params.id, {author, title, image, date}) ;
            this.props.history.push("/books/list")
        } catch(err) {
            console.log(err)
        }
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Update books</h1>
                <FormBook 
                    handleSubmit={this.handleUpdateBook} 
                    />
            </div>
        )
    }
}
