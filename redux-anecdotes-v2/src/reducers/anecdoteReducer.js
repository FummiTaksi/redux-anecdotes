import anecdoteService from '../services/anecdotes'

const getId = () => (100000*Math.random()).toFixed(0)

export const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = []

const reducer = (store = initialState, action) => {
  if (action.type === 'VOTE') {
    return store
  }
  if (action.type === 'CREATE') {
    const newList = [...store, action.content]
    return newList
  }
  if (action.type === 'INIT') {
    return action.content
  }

  return store
}

export const anecdoteCreation = (content) => {
  return async (dispatch) => {
    const response = await anecdoteService.create(content)
    dispatch({
      type: 'CREATE',
      content: response
    })
  }
}

export const anecdoteVote = (anecdote) => {
  return async (dispatch) => {
    const response = await anecdoteService.vote(anecdote)
    console.log("RESPONSE",response)
    dispatch({
      type: 'VOTE',
      id: response.id
    })
  }
}

export const anecdoteInitialization = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT',
      content: anecdotes
    })
  }
}

export default reducer