import React from 'react'
import { connect } from 'react-redux'
import {filterChange} from '../reducers/filterReducer'

class FilterForm extends React.Component {

  handleChange = (e) => {
    this.props.filterChange(e.target.value)
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

const mapDispatchToProps =  {
  filterChange
}

const ConnectedFilterForm = connect(null,mapDispatchToProps)(FilterForm)
export default ConnectedFilterForm
