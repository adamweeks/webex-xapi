import React, {useState} from 'react';
import PropTypes from 'prop-types';

import { Button, ButtonGroup, Icon } from '@momentum-ui/react';

function Controls(props) {
  const [position, setPosition] = useState();

  function handleClick(e) {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    console.log(`Setting position (${x}, ${y})`);
    setPosition({x, y});

    // Convert our x and y to -1 through 1
    // Width and Height is 500
    const centerAmount = 250;
    const xPercent = (x - centerAmount) / centerAmount;
    const yPercent = (y - centerAmount) / centerAmount;
    props.onSetPosition({x: xPercent, y: yPercent});
  }

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
      <hr/>
      <div style={{backgroundColor: 'gray', height: '500px', width: '500px'}} onClick={handleClick}>
        {
          position &&
          <div 
            style={{backgroundColor: 'red', height: '10px', width: '10px', position: 'relative', top: position.y, left: position.x}} 
          />
        }
      </div>
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
  onZoomStop: PropTypes.func.isRequired,
  onSetPosition: PropTypes.func.isRequired
}

export default Controls

