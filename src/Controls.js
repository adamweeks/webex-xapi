import React from 'react';
import PropTypes from 'prop-types';

import { Button, ButtonGroup, Icon } from '@momentum-ui/react';

function Controls(props) {
  return (
    <div>
      <ButtonGroup highlightSelected={false}>
        <Button ariaLabel='up' onClick={props.onPanUp}><Icon name='icon-arrow-up_12' /></Button>
        <Button ariaLabel='left' onClick={props.onPanLeft}><Icon name='icon-arrow-left_12' /></Button>
        <Button ariaLabel='right' onClick={props.onPanRight}><Icon name='icon-arrow-right_12' /></Button>
        <Button ariaLabel='down' onClick={props.onPanDown}><Icon name='icon-arrow-down_12' /></Button>
      </ButtonGroup>
      <ButtonGroup highlightSelected={false}>
        <Button ariaLabel="zoom in" onClick={props.onZoomIn}><Icon name="icon-zoom-in_20"/></Button>
        <Button ariaLabel="zoom out" onClick={props.onZoomOut}><Icon name="icon-zoom-out_20"/></Button>
      </ButtonGroup>
    </div>
  )
}

Controls.propTypes = {
  onPanUp: PropTypes.func.isRequired,
  onPanLeft: PropTypes.func.isRequired,
  onPanRight: PropTypes.func.isRequired,
  onPanDown: PropTypes.func.isRequired,
  onZoomIn: PropTypes.func.isRequired,
  onZoomOut: PropTypes.func.isRequired
}

export default Controls

