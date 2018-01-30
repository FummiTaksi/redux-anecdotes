import React from 'react'
import {connect} from 'react-redux'
import {anecdoteVote} from '../reducers/anecdoteReducer'
import {notificationChange} from '../reducers/notificationReducer'
import FilterForm from './FilterForm'

class AnecdoteList extends React.Component {

  voteAnecdote = (anecdote) => {
    this.props.anecdoteVote(anecdote.id)
    this.props.notificationChange("you voted '" + anecdote.content + "'")
  }

  render() {
    return (
      <div>
        <h2>Anecdotes</h2>
        <FilterForm/>

        {this.props.filteredAnecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes} votes
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

const mapDispatchToProps = {
  anecdoteVote,
  notificationChange
}

const filterContainsInAnecdote = (filter,anecdote) => {
  const filterLowCase = filter.toLowerCase();
  const anecdoteLowCase = anecdote.toLowerCase();
  return anecdoteLowCase.includes(filterLowCase);
}
const makeFilteredList = (anecdotes, filter) => {
  return anecdotes.filter((anecdote) => {
    return filterContainsInAnecdote(filter, anecdote.content)
  })
}

const mapStateToProps = (state) => {
  return {
    filteredAnecdotes: makeFilteredList(state.anecdotes, state.filter)
  }

}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps)
  (AnecdoteList)

export default ConnectedAnecdoteList
