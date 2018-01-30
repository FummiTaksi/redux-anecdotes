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


  filterContainsInAnecdote = (filter,anecdote) => {
    const filterLowCase = filter.toLowerCase();
    const anecdoteLowCase = anecdote.toLowerCase();
    return anecdoteLowCase.includes(filterLowCase);
}

  makeFilteredList = () => {
    const {anecdotes , filter} = this.props
    return anecdotes.filter((anecdote) => {
      return this.filterContainsInAnecdote(filter, anecdote.content)
    })
  }
  render() {
    const anecdotes = this.makeFilteredList()
    return (
      <div>
        <h2>Anecdotes</h2>
        <FilterForm/>

        {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
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

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  }

}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps)
  (AnecdoteList)

export default ConnectedAnecdoteList
