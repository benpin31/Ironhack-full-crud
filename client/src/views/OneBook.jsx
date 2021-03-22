import React, { Component } from 'react'
import OneBookComp from './../components/OneBook'

const axios = require('axios');


export default class OneBook extends Component {

    state = {
        book: null 
    }

    async componentDidMount() {
        try {
            const book = await  axios.get("http://localhost:4000/api/books/"+this.props.match.params.id)
            this.setState({book: book.data})
        } catch(err) {
            console.log(err)
        }

    }


    render() {

        const { author, title, date, image } = this.state.book ? this.state.book : {} ;

        return (
            <div>
                <h1>
                    {
                        this.state.book 
                            &&
                        <OneBookComp 
                            author={author}
                            title={title}
                            date={date}
                            image={image}
                            />
                        
                    }
                </h1>
            </div>
        )
    }
}
