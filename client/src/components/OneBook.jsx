import React from 'react'

export default function OneBook({ author, title, date, image }) {
    return (
        <div>
            <ul>
                <li>{author}</li>
                <li>{title}</li>
                <li>{date}</li>
                <li>{image}</li>
            </ul>
        </div>
    )
}
