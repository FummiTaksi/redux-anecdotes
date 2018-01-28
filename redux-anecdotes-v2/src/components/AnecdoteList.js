import React from 'react'
import {anecdoteVote} from '../reducers/anecdoteReducer'
import {notificationChange} from '../reducers/notificationReducer'
import FilterForm from './FilterForm'

class AnecdoteList extends React.Component {

  voteAnecdote = (anecdote) => {
    this.props.store.dispatch(anecdoteVote(anecdote.id))
    this.props.store.dispatch(notificationChange("you voted '" + anecdote.content + "'"))
  }


  filterContainsInAnecdote = (filter,anecdote) => {
    const filterLowCase = filter.toLowerCase();
    const anecdoteLowCase = anecdote.toLowerCase();
    return anecdoteLowCase.includes(filterLowCase);
}

  makeFilteredList = () => {
    const state = this.props.store.getState()
    const anecdotes = state.anecdotes
    const filter = state.filter
    return anecdotes.filter((anecdote) => {
      return this.filterContainsInAnecdote(filter, anecdote.content)
    })
  }
  render() {
    const anecdotes = this.makeFilteredList()
    return (
      <div>
        <h2>Anecdotes</h2>
        <FilterForm store={this.props.store}/>

        {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => this.voteAnecdote(anecdote)}>
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default AnecdoteList
