import React from 'react'
import PropTypes from 'prop-types'

function Messages({messages}) {
  const messageElements = messages.map((message, index) =>
    <li key={`message-${index}`}>{message}</li>
  );

  const messagesStyle = {
    padding: '10px',
    border: 'solid',
    margin: '10px',
    maxHeight: '500px',
    overflow: 'scroll'
  }

  return (
    <div style={messagesStyle} id="messages">
      <ul>
        {messageElements}
      </ul>
    </div>
  )
}

Messages.propTypes = {
  messages: PropTypes.array
}

Messages.defaultProps = {
  messages: []
}

export default Messages

