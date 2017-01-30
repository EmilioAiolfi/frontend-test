// Libs
import React from 'react';
import CONFIG from '../../config';

import Chat from '../../components/Chat';

const ChatContainer = React.createClass({
  displayName: 'ChatContainer',

  getInitialState() {
    return {
      endPoint: ''
    };
  },

  render() {
    return (
      <div>
        <h1>{ 'Chat Container' } </h1>
        <Chat endPoint={ CONFIG.API.ENDPOINT } />
      </div>
    );
  }
});

export default ChatContainer;
