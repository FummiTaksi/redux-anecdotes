const initialState = ''

const reducer = (store = initialState, action) => {
    if (action.type === 'CHANGE_FILTER') {
        return action.filter
    }
    return store
}

export const filterChange = (filter) => {
    return {
        type: 'CHANGE_FILTER',
        filter: filter
    }
}

export default reducer