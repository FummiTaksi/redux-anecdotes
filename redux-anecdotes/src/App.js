import React from 'react';


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      newAnecdote: ''
    }
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({newAnecdote: e.target.value})
  }

  createAnecdote = (e) => {
    e.preventDefault()
    this.props.store.dispatch({type: "CREATE", content: this.state.newAnecdote})
  }
  render() {
    const anecdotes = this.props.store.getState().slice()
    anecdotes.sort((a , b) => {
      return b.votes - a.votes
    })
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.map(anecdote=>
          <div key={anecdote.id}>
            <div>
              {anecdote.content} 
            </div>
            <div>
              has {anecdote.votes}
              <button 
                onClick = {(e) => this.props.store.dispatch({type: "VOTE", id: anecdote.id })}
              >
                vote
              </button>
            </div>
          </div>
        )}
        <h2>create new</h2>
        <form onSubmit = {this.createAnecdote}>
          <div><input onChange = {this.handleChange}/></div>
          <button type= "submit">create</button> 
        </form>
      </div>
    )
  }
}

export default App