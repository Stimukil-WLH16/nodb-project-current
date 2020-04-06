import React, {Component} from 'react'
import books from '../data.json'
import ListItem from './ListItem'
import Form from './Form'

class List extends Component{
    constructor(){
        super()

        this.state = {
            books: books
        }

        this.addBook = this.addBook.bind(this)
        this.deleteBook = this.deleteBook.bind(this)
    }

    addBook(title, author, bookImg){
        const id = this.state.books[this.state.books.length - 1].id + 1
        const newBook = {id, title, author, bookImg}
        const newArray = [...this.state.books, newBook]

        this.setState({
            books: newArray
        })
    }

    deleteBook(id){
        const index = this.state.books.findIndex(book => book.id === id)
        const newArray = [...this.state.books]
        newArray.splice(index, 1)
        this.setState({
            books: newArray
        })
    }

    editBook(title, author, bookImg){
        const index = this.state.books.findIndex(book => book.index === index)

        
    }

    render(){
        const booksMap = this.state.books.map(book => {
            return <ListItem deleteBook={this.deleteBook} key={book.id} book={book}/>
        })

        return (
            <div className='List'>                
                {booksMap}
            </div>
        )
    }
}

export default List