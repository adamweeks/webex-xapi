import React, {useState} from 'react'

import Auth from './Auth';
import Controls from './Controls';
import Device from './Device';
import Messages from './Messages';
import Status from './Status';
import PeopleWatcher from './PeopleWatcher';

import xAPI from './api';

const ZOOM_IN = 'ZOOM_IN';
const ZOOM_OUT = 'ZOOM_OUT';
const ZOOM_STOP = 'ZOOM_STOP';
const PAN_LEFT = 'PAN_LEFT';
const PAN_RIGHT = 'PAN_RIGHT';
const PAN_STOP = 'PAN_STOP';
const TILT_UP = 'TILT_UP';
const TILT_DOWN = 'TILT_DOWN';
const TILT_STOP = 'TILT_STOP';

export default function Main() {
  const [hasToken, setHasToken] = useState(false);
  const [messages, setMessages] = useState([]);
  const [api, setApi] = useState();
  const [status, setStatus] = useState({});
  const [peopleCount, setPeopleCount] = useState(0);
  const [peopleLastSeen, setPeopleLastSeen] = useState();

  function addMessage(message) {
    const updatedMessages = [...messages, message];
    setMessages(updatedMessages);
  }

  function handleAuth(token) {
    // If we have a default device in env, use it
    const myApi = new xAPI(token, process.env.REACT_APP_DEVICE_ID);
    setApi(myApi);
    setHasToken(true);
  }

  function handleControl(control) {
    addMessage(`${control}: sending`);

    switch (control) {
      case ZOOM_IN:
        api.zoomIn().then((response) => {
          addMessage(`${control}: delivered`);
        });
        break;
      case ZOOM_OUT:
        api.zoomOut().then(() => {
          addMessage(`${control}: delivered`);
        });
        break;
      case ZOOM_STOP:
        api.zoomStop().then(() => {
          addMessage(`${control}: delivered`);
        });
        break;
      case PAN_LEFT:
        api.panLeft().then(() => {
          addMessage(`${control}: delivered`);
        });
        break;
      case PAN_RIGHT:
        api.panRight().then(() => {
          addMessage(`${control}: delivered`);
        });
        break;
      case PAN_STOP:
        api.panStop().then(() => {
          addMessage(`${control}: delivered`);
        });
        break;
      case TILT_DOWN:
        api.tiltDown().then(() => {
          addMessage(`${control}: delivered`);
        });
        break;
      case TILT_UP:
        api.tiltUp().then(() => {
          addMessage(`${control}: delivered`);
        });
        break;
      case TILT_STOP:
        api.tiltStop().then(() => {
          addMessage(`${control}: delivered`)
        });
        break;
      default:
        break;
    }
  }

  function handleDeviceID(deviceID) {
    api.setDevice(deviceID);
  }

  async function handleGetPeopleCount() {
    const getPeopleCountResults = await api.getPeopleCount();
    
    setPeopleCount(getPeopleCountResults);
    if (getPeopleCountResults) {
      setPeopleLastSeen(new Date().toString());
    }
  }

  function handleGetStatus() {
    api.getStatus().then((apiStatus) => {
      setStatus(apiStatus);
    });
  }

  async function handleSetPosition(position) {
    addMessage(`setting position: ${position.x}, ${position.y}`);
    await api.setPosition(position);
    addMessage(`position set`);
  }

  return (
    <div>
      {
        !hasToken &&
        <Auth onAuth={handleAuth} />
      }
      {
        hasToken &&
        <>
          <Device onDeviceChange={handleDeviceID} />
          <Controls 
            onZoomIn={() => handleControl(ZOOM_IN)}
            onZoomOut={() => handleControl(ZOOM_OUT)}   
            onZoomStop={() => handleControl(ZOOM_STOP)}         
            onTiltUp={() => handleControl(TILT_UP)}
            onTiltDown={() => handleControl(TILT_DOWN)}
            onTiltStop={() => handleControl(TILT_STOP)}
            onPanLeft={() => handleControl(PAN_LEFT)}
            onPanStop={() => handleControl(PAN_STOP)}
            onPanRight={() => handleControl(PAN_RIGHT)}
            onSetPosition={handleSetPosition}
          />
          <PeopleWatcher 
            onGetPeopleCount={handleGetPeopleCount} 
            peopleCount={peopleCount}
            peopleLastSeen={peopleLastSeen}
          />
          <Status onGetStatus={handleGetStatus} status={status} />
          <Messages messages={messages} />
        </>
      }
      
    </div>
  )
}
