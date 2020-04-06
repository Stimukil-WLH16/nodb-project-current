import React from 'react'
import './App.css'
import List from './components/List'
import Form from './components/Form'


function App (){
  return ( 
    <div className='App'>
      <h1 className='book-list-title'>A Few of My Favorite Books</h1>
      {/* <Form addBook={this.addBook} /> */}
      <Form />
      <List />
    </div>
  )
}

export default App