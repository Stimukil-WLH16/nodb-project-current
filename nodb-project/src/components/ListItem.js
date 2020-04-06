import React from 'react'
import Form from './Form'

function ListItem(props){
    const {book} = props
    return(
        <div className="List-item">
            <img src={book.bookImg} className="book-cover" alt={book.title} />

            <div className='book-info'>
                <p className='book-title'>{props.book.title}</p>
                <p className='book-author'>{props.book.author}</p>
                
                <button>Edit</button>
                <button onClick={() => props.deleteBook(book.id)}>Delete</button>

            </div>
        </div>
    )
}
export default ListItem