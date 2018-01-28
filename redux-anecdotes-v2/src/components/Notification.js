import React from 'react'
import notificationReducer, {notificationChange} from '../reducers/notificationReducer'

class Notification extends React.Component {

  render() {
    const message = this.props.store.getState().notification
    const style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1
    }
    if (message === '') {
      return (
        <div></div>
      )
    }
    else {
      setTimeout(() => {
        this.props.store.dispatch(notificationChange(''))
      },5000)
      return (
        <div style={style}>
          {message}
        </div>
      )

    }

  }
}

export default Notification
