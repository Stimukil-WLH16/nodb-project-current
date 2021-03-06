import React, {Component} from 'react'
import ListItem from './ListItem'

class Form extends Component{
    constructor(){
        super()

        this.state = {
            title: '',
            author: '',
            bookImg: '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }

    componentDidMount(){}

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleAdd(e){
        e.preventDefault()
        const {title, author, bookImg} = this.state
        this.props.addBook(title, author, bookImg)
    }

    render(){
        return(
            <form onSubmit={this.handleAdd} className="Form">
                <input
                name="title"
                placeholder="Title"
                onChange={e => this.handleChange(e)} />
                <input
                name="author"
                placeholder="Author"
                onChange={e => this.handleChange(e)}/>
                <input
                name="cover"
                placeholder="Cover Image"
                onChange={e => this.handleChange(e)}/> 

                <button type="submit">Add Book</button>
            </form>
        )
    }
}
export default Form 