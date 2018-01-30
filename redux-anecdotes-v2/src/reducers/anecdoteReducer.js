const getId = () => (100000*Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = []

const reducer = (store = initialState, action) => {
  if (action.type ==='VOTE') {
    const old = store.filter(a => a.id !==action.id)
    const voted = store.find(a => a.id === action.id)

    return [...old, { ...voted, votes: voted.votes+1} ]
  }
  if (action.type === 'CREATE') {

    return [...store, { content: action.content, id: getId(), votes:0 }]
  }
  if (action.type === 'INIT') {
    return action.content
  }

  return store
}

export const anecdoteCreation = (content) => {
  return {
    type: 'CREATE',
    content: content
  }
}

export const anecdoteVote = (id) => {
  return {
    type: 'VOTE',
    id: id
  }
}

export const anecdoteInitialization = (content) => {
  return {
    type: 'INIT',
    content: content
  }
}

export default reducer