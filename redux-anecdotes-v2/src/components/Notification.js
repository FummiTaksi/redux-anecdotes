import React from 'react'
import notificationReducer from '../reducers/notificationReducer'

class Notification extends React.Component {
  render() {
    const message = this.props.store.getState().notification
    const style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1
    }
    return (
      <div style={style}>
        {message}
      </div>
    )
  }
}

export default Notification
