import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import {Button, Icon} from '@momentum-ui/react';

function PeopleWatcher(props) {
  const [isListening, setIsListening] = useState(false);
  const [loopID, setLoopID] = useState();

  function handleSetListening() {
    setIsListening(!isListening);
  }

  useEffect(() => {
    if (isListening) {
      console.log('starting loop');
      const intervalID = setInterval(() => {
        props.onGetPeopleCount();
      }, 5000);
      setLoopID(intervalID);
    }
    else {
      if (loopID) {
        console.log('ending loop');
        clearInterval(loopID);
        setLoopID();
      }
    }
  }, [isListening])

  return (
    <div>
      <h2>People Watcher</h2>
      <Button 
        onClick={handleSetListening} 
        ariaLabel="Toggle Listening"
        color={isListening ? 'green' : 'red'}
      >
        <Icon name={isListening ? 'icon-proximity_28' : 'icon-proximity-muted_28'} />
      </Button>
      <div>
        People Count: {props.peopleCount} <br />
        Last Seen: {props.peopleLastSeen}
      </div>
    </div>
  )
}

PeopleWatcher.propTypes = {
  onGetPeopleCount: PropTypes.func.isRequired,
  peopleCount: PropTypes.number,
  peopleLastSeen: PropTypes.string,
}

export default PeopleWatcher

