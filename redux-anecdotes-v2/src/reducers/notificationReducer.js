const initialState = "Welcome to anecdote-app"

const reducer = (store = initialState, action) => {
    if (action.type === 'CHANGE') {
        return action.message
    }
    return store
}

export const notificationChange = (message) => {
    return {
        type: 'CHANGE',
        message: message
    }
}

export default reducer