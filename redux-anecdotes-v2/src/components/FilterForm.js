import React from 'react'
import {filterChange} from '../reducers/filterReducer'

class AnecdoteForm extends React.Component {

  handleChange = (e) => {
    this.props.store.dispatch(filterChange(e.target.value))
  }
   render() {
     return (
       <div>
        filter
        <input onChange = {this.handleChange}/>
      </div>
     )
   }
}

export default AnecdoteForm
