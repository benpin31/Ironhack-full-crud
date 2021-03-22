import React, { Component } from 'react'
import { withRouter } from "react-router";

const axios = require('axios');


class FormBooks extends Component {

    state = {
        author: "",
        title: "",
        date: "",
        image: ""
    }

    handleGetInput = event => {
        const name = event.target.name ;
        const value = event.target.value ;
        this.setState({[name]: value})
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.handleSubmit(this.state) ;
    }

    componentDidMount() {
        if (this.props.location.state) {
            const {author, title, date, image} = this.props.location.state.book
            console.log(new Date(date+"-01-01").toString())
            this.setState({
                author:author,
                title: title,
                date: date+"-01-01" ,
                image: image
            })
        }

    }


    render() {
        console.log(this.props)
        const {author, title, date, image} = this.state

        return (
            <div>
                <form action="" onSubmit={this.handleSubmit}>
                    <label htmlFor="author">author</label>
                    <input type="text" name="author" id="author" value={author}  onChange={this.handleGetInput}/>
                    <label htmlFor="title">title</label>
                    <input type="text" name="title" id="title" value={title} onChange={this.handleGetInput}/>
                    <label htmlFor="date">date</label>
                    <input type="date" name="date" id="date" value={date} onChange={this.handleGetInput}/>
                    <label htmlFor="image">image</label>
                    <input type="text" name="image" id="image" value={image} onChange={this.handleGetInput}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default withRouter(FormBooks)
