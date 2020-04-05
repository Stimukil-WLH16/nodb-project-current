import React from 'react'
import Form from './Form'

function ListItem(props){
    const {book} = props
    return(
        <div className="List-item">
            <img src={book.bookImg} className="book-cover" alt={book.title} />

            <div className='book-info'>
                <p>{props.book.title}</p>
                <p>{props.book.author}</p>

                <p onClick={() => props.deleteBook(book.id)}>X</p>

            </div>
        </div>
    )
}
export default ListItem