import React from 'react';
import PropTypes from 'prop-types';

import {Button} from '@momentum-ui/react';

function Status(props) {
  const style = {
    padding: '10px',
    border: 'solid',
    margin: '10px',
    maxHeight: '500px',
    overflow: 'scroll'
  }

  return (
    <div style={style}>
      <h2>Device Status</h2>
      <Button onClick={props.onGetStatus} ariaLabel="Get Status" children="Get Status"/>
      <pre>
        {JSON.stringify(props.status, null, 2)}
      </pre>
    </div>
  )
}

Status.propTypes = {
  status: PropTypes.object,
  onGetStatus: PropTypes.func.isRequired,
}

Status.defaultProps = {
  status: {}
}

export default Status

