import React from 'react'
import { connect } from 'react-redux'
import {notificationChange} from '../reducers/notificationReducer'

class Notification extends React.Component {

  render() {
    const {notification} = this.props
    const style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1
    }
    if (notification === '') {
      return (
        <div></div>
      )
    }
    else {
      setTimeout(() => {
        this.props.notificationChange('',1)
      },5000)
      return (
        <div style={style}>
          {notification}
        </div>
      )

    }

  }
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

const mapDispatchToProps = {
  notificationChange
}

const ConnectedNotification = connect(
  mapStateToProps, 
  mapDispatchToProps)
  (Notification)

export default ConnectedNotification
