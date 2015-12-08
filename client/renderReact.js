import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';

import AppComponet from '../universal/app';


var socket = io('http://localhost:3003')

socket.emit('initialAppState')
socket.on('initialAppState', function(state){

    ReactDOM.render(<AppComponet {...state} />, document.getElementById('app') )

})
