import React from 'react'
import {connect} from 'react-redux'
import {anecdoteCreation, asObject} from '../reducers/anecdoteReducer'
import {notificationChange} from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

class AnecdoteForm extends React.Component {

  handleSubmit = async(e) => {
    const createdAnecdote = await anecdoteService.create(asObject(e.target.anecdote.value))
    this.props.notificationChange("you created anecdote '" + createdAnecdote.content + "'")
    e.target.anecdote.value = ''
  }
   render() {
     return (
       <div>
      <h2>create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name='anecdote'/></div>
          <button>create</button> 
        </form>
      </div>
     )
   }
}

const mapDispatchToProps = {
  anecdoteCreation,
  notificationChange
}

const ConnectedAnecdoteForm = connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)

export default ConnectedAnecdoteForm
