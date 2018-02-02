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
    const notVoted = store.filter(a => a.id !== action.id)
    const voted = store.find(a => a.id === action.id)
    const changed = { ...voted, votes: voted.votes + 1 }
    return store.map((anecdote => {
      return anecdote.id === action.id ? changed : anecdote
    }))
  }
  if (action.type === 'CREATE') {
    console.log("CREATE STORE",store)
    const newList = [...store, action.content]
    return newList
  }
  if (action.type === 'INIT') {
    console.log("INIT")
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
    const response = await anecdoteService.update({ ...anecdote, votes: anecdote.votes + 1 })
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