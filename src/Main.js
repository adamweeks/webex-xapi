import React, {useState} from 'react'

import Auth from './Auth';
import Controls from './Controls';
import Messages from './Messages';

export default function Main() {
  const [token, setToken] = useState("");
  const [messages, setMessages] = useState([]);

  function handleControl(control) {
    const updatedMessages = [...messages, `control sent: ${control}`];
    setMessages(updatedMessages);
  }

  return (
    <div>
      <Auth onAuth={setToken} />
      <Controls 
        onZoomIn={() => handleControl('zoomIn')}
        onZoomOut={() => handleControl('zoomOut')}
        onPanUp={() => handleControl('onPanUp')}
        onPanLeft={() => handleControl('onPanLeft')}
        onPanRight={() => handleControl('onPanRight')}
        onPanDown={() => handleControl('onPanDown')}
      />
      <Messages messages={messages} />
    </div>
  )
}
