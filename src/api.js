export const constants = {
  ZOOM_IN: 'In',
  ZOOM_OUT: 'Out',
  PAN_LEFT: 'Left',
  PAN_RIGHT: 'Right',
  TILT_UP: 'Up',
  TILT_DOWN: 'Down',
  STOP: 'Stop'
};

export default class xAPI {
  constructor(token, deviceId) {
    this.token = token;
    this.deviceId = deviceId;
    this.baseUrl = 'https://api.ciscospark.com/v1';
    this.headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };
  }

  setDevice(deviceId) {
    console.log(`Setting device id: ${deviceId}`);
    this.deviceId = deviceId;
  }

  async zoomIn() {
    return await this.zoom(constants.ZOOM_IN);
  }

  async zoomOut() {
    return await this.zoom(constants.ZOOM_OUT);
  }

  async zoomStop() {
    return await this.zoom(constants.STOP);
  }

  async panLeft() {
    return await this.pan(constants.PAN_LEFT);
  }

  async panRight() {
    return await this.pan(constants.PAN_RIGHT);
  }

  async panStop() {
    return await this.pan(constants.STOP);
  }

  async tiltDown() {
    return await this.tilt(constants.TILT_DOWN);
  }

  async tiltUp() {
    return await this.tilt(constants.TILT_UP);
  }

  async tiltStop() {
    return await this.tilt(constants.STOP)
  }

  async zoom(direction) {
    const endpoint = '/xapi/command/camera.ramp';
    const url = `${this.baseUrl}${endpoint}`;
    const body = {
      "deviceId": this.deviceId,
      "arguments": {
        "CameraId": 1, 
        'Zoom': direction
      }
    }
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: this.headers,
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(body) // body data type must match "Content-Type" header
    });
    
    return await response.json(); // parses JSON response into native JavaScript objects)
  }

  async pan(direction) {
    const endpoint = '/xapi/command/camera.ramp';
    const url = `${this.baseUrl}${endpoint}`;
    const body = {
      "deviceId": this.deviceId,
      "arguments": {
        "CameraId": 1, 
        'Pan': direction
      }
    }
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: this.headers,
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(body) // body data type must match "Content-Type" header
    });
    
    return await response.json(); // parses JSON response into native JavaScript objects)
  }

  async tilt(direction) {
    const endpoint = '/xapi/command/camera.ramp';
    const url = `${this.baseUrl}${endpoint}`;
    const body = {
      "deviceId": this.deviceId,
      "arguments": {
        "CameraId": 1, 
        'Tilt': direction
      }
    }
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: this.headers,
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(body) // body data type must match "Content-Type" header
    });
    
    return await response.json(); // parses JSON response into native JavaScript objects)
  }
}