import React from 'react'
import './App.css'
import List from './components/List'

function App (){
  return ( 
    <div className='App'>
      <h1 className='book-list-title'>My Favorite Books</h1>
      <List />
    </div>
  )
}

export default App