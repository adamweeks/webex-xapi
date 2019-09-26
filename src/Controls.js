import React from 'react';
import PropTypes from 'prop-types';

import { Button, ButtonGroup, Icon } from '@momentum-ui/react';

function Controls(props) {
  return (
    <div>
      <ButtonGroup highlightSelected={false}>
        <Button ariaLabel='up' onMouseDown={props.onTiltUp} onMouseUp={props.onTiltStop}><Icon name='icon-arrow-up_12' /></Button>
        <Button ariaLabel='left' onMouseDown={props.onPanLeft} onMouseUp={props.onPanStop}><Icon name='icon-arrow-left_12' /></Button>
        <Button ariaLabel='right' onMouseDown={props.onPanRight} onMouseUp={props.onPanStop}><Icon name='icon-arrow-right_12' /></Button>
        <Button ariaLabel='down' onMouseDown={props.onTiltDown} onMouseUp={props.onTiltStop}><Icon name='icon-arrow-down_12' /></Button>
      </ButtonGroup>
      <ButtonGroup highlightSelected={false}>
        <Button ariaLabel="zoom in" onMouseDown={props.onZoomIn} onMouseUp={props.onZoomStop}><Icon name="icon-zoom-in_20"/></Button>
        <Button ariaLabel="zoom out" onMouseDown={props.onZoomOut} onMouseUp={props.onZoomStop}><Icon name="icon-zoom-out_20"/></Button>
      </ButtonGroup>
    </div>
  )
}

Controls.propTypes = {
  onTiltUp: PropTypes.func.isRequired,
  onTiltDown: PropTypes.func.isRequired,
  onTiltStop: PropTypes.func.isRequired,
  onPanLeft: PropTypes.func.isRequired,
  onPanRight: PropTypes.func.isRequired,
  onPanStop: PropTypes.func.isRequired,
  onZoomIn: PropTypes.func.isRequired,
  onZoomOut: PropTypes.func.isRequired,
  onZoomStop: PropTypes.func.isRequired
}

export default Controls

